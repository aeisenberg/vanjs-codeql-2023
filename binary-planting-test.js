import * as toolrunner from "@actions/exec/lib/toolrunner";
import * as safeWhich from "@chrisgavin/safe-which";



const binary = await safeWhich.safeWhich("binary");
const unsafeBinary = "unsafe-binary";



// This is a warning
await new toolrunner.ToolRunner(getBinaries()[0], ["arg1", "arg2"]).exec();

// This is safe
await new toolrunner.ToolRunner(getBinaries()[1], ["arg1", "arg2"]).exec();

function getBinaries() {
  return [binary, unsafeBinary];
}
