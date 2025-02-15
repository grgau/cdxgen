/**
 * For all modules in the specified package, creates a list of
 * component objects from each one.
 *
 * @param {Object} options CLI options
 * @param {Object} allImports All imports
 * @param {Object} pkg Package object
 * @param {string} ptype Package type
 */
export function listComponents(options: any, allImports: any, pkg: any, ptype?: string): any[];
/**
 * Function to create bom string for Java jars
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 *
 * @returns {Object} BOM with namespace mapping
 */
export function createJarBom(path: string, options: any): any;
/**
 * Function to create bom string for Android apps using blint
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createAndroidBom(path: string, options: any): {
    bomJson: any;
    dependencies: any;
    parentComponent: any;
};
/**
 * Function to create bom string for binaries using blint
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createBinaryBom(path: string, options: any): {
    bomJson: any;
    dependencies: any;
    parentComponent: any;
};
/**
 * Function to create bom string for Java projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createJavaBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for Node.js projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createNodejsBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for Python projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createPythonBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for Go projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createGoBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for Rust projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createRustBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for Dart projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createDartBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for cpp projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createCppBom(path: string, options: any): any;
/**
 * Function to create bom string for clojure projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createClojureBom(path: string, options: any): any;
/**
 * Function to create bom string for Haskell projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createHaskellBom(path: string, options: any): any;
/**
 * Function to create bom string for Elixir projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createElixirBom(path: string, options: any): any;
/**
 * Function to create bom string for GitHub action workflows
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createGitHubBom(path: string, options: any): any;
/**
 * Function to create bom string for cloudbuild yaml
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createCloudBuildBom(path: string, options: any): any;
/**
 * Function to create obom string for the current OS using osquery
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createOSBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for Jenkins plugins
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createJenkinsBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for Helm charts
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createHelmBom(path: string, options: any): any;
/**
 * Function to create bom string for swift projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createSwiftBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for docker compose
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createContainerSpecLikeBom(path: string, options: any): any;
/**
 * Function to create bom string for php projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createPHPBom(path: string, options: any): any;
/**
 * Function to create bom string for ruby projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createRubyBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for csharp projects
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createCsharpBom(path: string, options: any): Promise<any>;
export function mergeDependencies(dependencies: any, newDependencies: any, parentComponent?: {}): {
    ref: string;
    dependsOn: any[];
}[];
export function trimComponents(components: any): any[];
/**
 * Dedupe components
 *
 * @param {Object} options Options
 * @param {Array} components Components
 * @param {Object} parentComponent Parent component
 * @param {Array} dependencies Dependencies
 *
 * @returns {Object} Object including BOM Json
 */
export function dedupeBom(options: any, components: any[], parentComponent: any, dependencies: any[]): any;
/**
 * Function to create bom string for all languages
 *
 * @param {string} pathList list of to the project
 * @param {Object} options Parse options from the cli
 */
export function createMultiXBom(pathList: string, options: any): Promise<any>;
/**
 * Function to create bom string for various languages
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createXBom(path: string, options: any): Promise<any>;
/**
 * Function to create bom string for various languages
 *
 * @param {string} path to the project
 * @param {Object} options Parse options from the cli
 */
export function createBom(path: string, options: any): any;
/**
 * Method to submit the generated bom to dependency-track or cyclonedx server
 *
 * @param {Object} args CLI args
 * @param {Object} bomContents BOM Json
 */
export function submitBom(args: any, bomContents: any): Promise<any>;
//# sourceMappingURL=index.d.ts.map