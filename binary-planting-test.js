import * as toolrunner from "@actions/exec/lib/toolrunner";
import * as safeWhich from "@chrisgavin/safe-which";

const safeBinary = await safeWhich.safeWhich("binary");
const unsafeBinary = "unsafe-binary";

// This is safe
await new toolrunner.ToolRunner(getBinaries()[0]).exec();

// This is unsafe
await new toolrunner.ToolRunner(getBinaries()[1]).exec();

function getBinaries() {
  return [safeBinary, unsafeBinary];
}
