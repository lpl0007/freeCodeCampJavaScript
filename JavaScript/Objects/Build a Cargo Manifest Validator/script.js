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
  } else if (!(manifest.destination.trim() && typeof manifest.destination === 'string')) {
    newManifest.destination = "Invalid";
  }

  if (!manifest.hasOwnProperty("weight")) {
    newManifest.weight = "Missing";
  } else if (!(typeof manifest.weight === 'number' && manifest.weight > 0 && !Number.isNaN(manifest.weight))) {
    newManifest.weight = "Invalid";
  }

  if (!manifest.hasOwnProperty("unit")) {
    newManifest.unit = "Missing";
  } else if (!(manifest.unit == "kg" || manifest.unit == "lb")) {
    newManifest.unit = "Invalid";
  }

  if (!manifest.hasOwnProperty("hazmat")) {
    newManifest.hazmat = "Missing";
  } else if (!(manifest.hazmat == true || manifest.hazmat == false)) {
    newManifest.hazmat = "Invalid";
  }

  return newManifest;
}

function processManifest(manifest) {}
