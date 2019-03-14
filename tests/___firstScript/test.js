if (typeof PATH_TO_THE_REPO_PATH_UTILS_FILE === 'undefined') PATH_TO_THE_REPO_PATH_UTILS_FILE = "https://raw.githubusercontent.com/highfidelity/hifi_tests/master/tests/utils/branchUtils.js";
Script.include(PATH_TO_THE_REPO_PATH_UTILS_FILE);
var nitpick = createNitpick(Script.resolvePath("."));

nitpick.perform("Initial setup", Script.resolvePath("."), "primary", function(testType) {
    nitpick.addStep("Set snapshot location folder", function () {
        Snapshot.setSnapshotsLocation("/sdcard/snapshots");
    });

    nitpick.addStep("Goto test domain", function () {
        Window.location = "hifi://192.168.0.10/0,1,0";
    });

    nitpick.runTest(testType);
});
