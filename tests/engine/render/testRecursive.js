// This is an automatically generated file, created by nitpick
PATH_TO_THE_REPO_PATH_UTILS_FILE = "https://raw.githubusercontent.com/NissimHadar/hifi_tests/addGridTests/tests/utils/branchUtils.js";
Script.include(PATH_TO_THE_REPO_PATH_UTILS_FILE);

if (typeof depth === 'undefined') {
   depth = 0;
   nitpick = createNitpick(Script.resolvePath("."));
   testsRootPath = nitpick.getTestsRootPath();

   nitpick.enableRecursive();
   nitpick.enableAuto();
} else {
   depth++
}

Script.include(testsRootPath + "engine/render/camera/testRecursive.js");

if (depth > 0) {
   depth--;
} else {
   nitpick.runRecursive();
}

