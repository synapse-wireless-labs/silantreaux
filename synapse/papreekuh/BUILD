package(default_visibility = ["//visibility:public"])

##py_library(
##    name = "papreekuh",
##    srcs = ["lib.py"],
##)

py_binary(
    name = "bin",
    srcs = glob(["papreekuh/*.py"]),
    ##deps = [":lib"],
    main = "main.py"
)

py_test(
    name = "foo",
    srcs = glob(["tests/*.py"]),
    main = "run_tests.py"
)

filegroup(
    name = "srcs",
    srcs = ["BUILD"] + glob(["**/*.py"]),
)