import path from "path";
import glob from "glob";

export default {
    root: path.join(__dirname, "public"),
    // build: {
    //     outDir: path.join(__dirname, "dist"),
    //     rollupOptions: {
    //         input: glob.sync(path.resolve(__dirname, "src", "*.html")),
    //     },
    // },
};