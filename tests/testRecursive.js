// This is an automatically generated file, created by nitpick
PATH_TO_THE_REPO_PATH_UTILS_FILE = "https://raw.githubusercontent.com/NissimHadar/hifi_tests/Quest/tests/utils/branchUtils.js";
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

Script.include(testsRootPath + "zzz_lastScript/test.js");
Script.include(testsRootPath + "content/testRecursive.js");
Script.include(testsRootPath + "aaa_firstScript/test.js");

if (depth > 0) {
   depth--;
} else {
   nitpick.runRecursive();
}

