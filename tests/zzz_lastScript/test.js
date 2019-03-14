if (typeof PATH_TO_THE_REPO_PATH_UTILS_FILE === 'undefined') PATH_TO_THE_REPO_PATH_UTILS_FILE = "https://raw.githubusercontent.com/highfidelity/hifi_tests/master/tests/utils/branchUtils.js";
Script.include(PATH_TO_THE_REPO_PATH_UTILS_FILE);
var nitpick = createNitpick(Script.resolvePath("."));

nitpick.perform("Final teardown", Script.resolvePath("."), "primary", function(testType) {
    nitpick.addStep("Set snapshot location folder", function () {
        Snapshot.setSnapshotsLocation("/sdcard/snapshots");
    });

    nitpick.addStep("Show the avatar", function () {
        MyAvatar.setEnableMeshVisible(true);
    });

    nitpick.runTest(testType);
});
