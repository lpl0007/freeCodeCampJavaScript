const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function serializeLedger(ledger) {
  if (ledger === null) return "null";
  if (typeof ledger === "string") {
    return `"${ledger
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/\t/g, "\\t")}"`;
  }
  if (typeof ledger !== "object") return String(ledger);
  if (Array.isArray(ledger)) {
    return `[${ledger.map(serializeLedger).join(",")}]`;
  }

  return `{${Object.keys(ledger)
    .map(key => `${serializeLedger(key)}:${serializeLedger(ledger[key])}`)
    .join(",")}}`;
}

function loadLedger(json) {
  let index = 0;

  function skipWhitespace() {
    while (/\s/.test(json[index])) index++;
  }

  function parseValue() {
    skipWhitespace();
    if (json[index] === "{") return parseObject();
    if (json[index] === "[") return parseArray();
    if (json[index] === '"') return parseString();
    if (json.startsWith("null", index)) {
      index += 4;
      return null;
    }
    if (json.startsWith("true", index)) {
      index += 4;
      return true;
    }
    if (json.startsWith("false", index)) {
      index += 5;
      return false;
    }

    const numberStart = index;
    while (/[-\d.eE+]/.test(json[index])) index++;
    return Number(json.slice(numberStart, index));
  }

  function parseString() {
    index++;
    let value = "";

    while (json[index] !== '"') {
      if (json[index] === "\\") {
        index++;
        const escapedCharacter = json[index++];
        const escapeMap = { n: "\n", r: "\r", t: "\t", "\\": "\\", '"': '"' };
        value += escapeMap[escapedCharacter] ?? escapedCharacter;
      } else {
        value += json[index++];
      }
    }
    index++;
    return value;
  }

  function parseObject() {
    const object = {};
    index++;
    skipWhitespace();

    while (json[index] !== "}") {
      const key = parseString();
      skipWhitespace();
      index++;
      object[key] = parseValue();
      skipWhitespace();
      if (json[index] === ",") {
        index++;
        skipWhitespace();
      }
    }
    index++;
    return object;
  }

  function parseArray() {
    const array = [];
    index++;
    skipWhitespace();

    while (json[index] !== "]") {
      array.push(parseValue());
      skipWhitespace();
      if (json[index] === ",") {
        index++;
        skipWhitespace();
      }
    }
    index++;
    return array;
  }

  return parseValue();
}

function checkoutDevice(ledger, assetTag, borrower) {
  const device = ledger[assetTag];

  if (!device) {
    return {
      ledger,
      message: `Asset tag ${assetTag} was not found.`
    };
  }

  if (device.status === "CheckedOut") {
    return {
      ledger,
      message: `Device with asset tag ${assetTag} is already checked out.`
    };
  }

  const updatedLedger = loadLedger(serializeLedger(ledger));
  const updatedDevice = updatedLedger[assetTag];
  updatedDevice.borrower.name = borrower.name;
  updatedDevice.borrower.email = borrower.email;
  updatedDevice.status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Asset tag ${assetTag} checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  const device = ledger[assetTag];

  if (!device) {
    return {
      ledger,
      message: `Asset tag ${assetTag} was not found.`
    };
  }

  const updatedLedger = loadLedger(serializeLedger(ledger));
  const updatedDevice = updatedLedger[assetTag];
  updatedDevice.borrower.name = "";
  updatedDevice.borrower.email = "";
  updatedDevice.dueDate = "";
  updatedDevice.status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Asset tag ${assetTag} checked in.`
  };
}

function parseLedgerDate(date) {
  const [month, day, year] = date.split("/").map(Number);
  return year * 10000 + month * 100 + day;
}

function listOverdueDevices(ledger, today) {
  const todayValue = parseLedgerDate(today);

  return Object.values(ledger)
    .filter(
      device =>
        device.status === "CheckedOut" &&
        parseLedgerDate(device.dueDate) < todayValue
    )
    .sort(
      (firstDevice, secondDevice) =>
        parseLedgerDate(firstDevice.dueDate) -
        parseLedgerDate(secondDevice.dueDate)
    );
}