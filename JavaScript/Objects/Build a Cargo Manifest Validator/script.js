function normalizeUnits(manifest) {
  const newManifest = {
    containerId: manifest.containerId,
    destination: manifest.destination,
    unit: "kg",
    hazmat: manifest.hazmat
  }
  if (manifest.unit == "lb") {
    newManifest.weight = manifest.weight * 0.45;
  } else {
    newManifest.weight = manifest.weight;
  }
  return newManifest;
}

function validateManifest(manifest) {
  const newManifest = {}

  if (!manifest.hasOwnProperty("containerId")) {
    newManifest.containerId = "Missing";
  } else if (!(manifest.containerId > 0 && Number.isInteger(manifest.containerId))) {
    newManifest.containerId = "Invalid";
    }

  if (!manifest.hasOwnProperty("destination")) {
    newManifest.destination = "Missing";
  } else if (!(typeof manifest.destination === 'string' && manifest.destination.trim())) {
    newManifest.destination = "Invalid";
  }

  if (!manifest.hasOwnProperty("weight")) {
    newManifest.weight = "Missing";
  } else if (!(typeof manifest.weight === 'number' && Number.isFinite(manifest.weight) && manifest.weight > 0)) {
    newManifest.weight = "Invalid";
  }

  if (!manifest.hasOwnProperty("unit")) {
    newManifest.unit = "Missing";
  } else if (!(manifest.unit === "kg" || manifest.unit === "lb")) {
    newManifest.unit = "Invalid";
  }

  if (!manifest.hasOwnProperty("hazmat")) {
    newManifest.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    newManifest.hazmat = "Invalid";
  }

  return newManifest;
}

function processManifest(manifest) {
  const validationResult = validateManifest(manifest);

  if (Object.keys(validationResult).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationResult);
  }
}
