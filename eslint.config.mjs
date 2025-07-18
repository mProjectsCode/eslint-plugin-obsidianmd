import { commands } from "./lib/rules/commands";
import { settingsTab } from "./lib/rules/settingsTab";
import { vault } from "./lib/rules/vault";
import detachLeaves from "./lib/rules/detachLeaves.ts";
import hardcodedConfigPath from "./lib/rules/hardcodedConfigPath.ts";
import noSampleCode from "./lib/rules/noSampleCode.ts";
import noPluginAsComponent from "./lib/rules/noPluginAsComponent.ts";
import noTFileTFolderCast from "./lib/rules/noTFileTFolderCast.ts";
import noViewReferencesInPlugin from "./lib/rules/noViewReferencesInPlugin.ts";
import noStaticStylesAssignment from "./lib/rules/noStaticStylesAssignment.ts";
import objectAssign from "./lib/rules/objectAssign.ts";
import platform from "./lib/rules/platform.ts";
import preferFileManagerTrashFile from "./lib/rules/preferFileManagerTrashFile.ts";
import preferAbstractInputSuggest from "./lib/rules/preferAbstractInputSuggest.ts";
import regexLookbehind from "./lib/rules/regexLookbehind.ts";
import sampleNames from "./lib/rules/sampleNames.ts";
import settingsTab from "./lib/rules/settingsTab.ts";
import validateManifest from "./lib/rules/validateManifest.ts";
import vaultIterate from "./lib/rules/vault/iterate.ts";

export default [
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: (await import("@typescript-eslint/parser")).default,
			ecmaVersion: 2020,
			sourceType: "module",
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
		plugins: {
			obsidianmd: {
				rules: {
					"commands/no-command-in-command-id": commands.noCommandInCommandId,
					"commands/no-command-in-command-name": commands.noCommandInCommandName,
					"commands/no-default-hotkeys": commands.noDefaultHotkeys,
					"commands/no-plugin-id-in-command-id": commands.noPluginIdInCommandId,
					"commands/no-plugin-name-in-command-name":
						commands.noPluginNameInCommandName,
					"settings-tab/no-manual-html-headings":
						settingsTab.noManualHtmlHeadings,
					"settings-tab/no-problematic-settings-headings":
						settingsTab.noProblematicSettingsHeadings,
					"vault/iterate": vault.iterate,
					"detach-leaves": detachLeaves,
					"hardcoded-config-path": hardcodedConfigPath,
					"no-plugin-as-component": noPluginAsComponent,
					"no-sample-code": noSampleCode,
					"no-tfile-tfolder-cast": noTFileTFolderCast,
					"no-view-references-in-plugin": noViewReferencesInPlugin,
					"no-static-styles-assignment": noStaticStylesAssignment,
					"object-assign": objectAssign,
					platform: platform,
					"prefer-abstract-input-suggest": preferAbstractInputSuggest,
					"prefer-file-manager-trash-file": preferFileManagerTrashFile,
					"regex-lookbehind": regexLookbehind,
					"sample-names": sampleNames,
					"validate-manifest": validateManifest,
					"vault-iterate": vaultIterate,
				},
			},
		},
		rules: {
			"obsidianmd/commands/no-command-in-command-id": "error",
			"obsidianmd/commands/no-command-in-command-name": "error",
			"obsidianmd/commands/no-default-hotkeys": "error",
			"obsidianmd/commands/no-plugin-id-in-command-id": "error",
			"obsidianmd/commands/no-plugin-name-in-command-name": "error",
			"obsidianmd/settings-tab/no-manual-html-headings": "error",
			"obsidianmd/settings-tab/no-problematic-settings-headings":
				"error",
			"obsidianmd/vault/iterate": "error",
			"obsidianmd/detach-leaves": "error",
			"obsidianmd/hardcoded-config-path": "error",
			"obsidianmd/no-plugin-as-component": "error",
			"obsidianmd/no-sample-code": "error",
			"obsidianmd/no-tfile-tfolder-cast": "error",
			"obsidianmd/no-view-references-in-plugin": "error",
			"obsidianmd/no-static-styles-assignment": "error",
			"obsidianmd/object-assign": "error",
			"obsidianmd/platform": "error",
			"obsidianmd/prefer-file-manager-trash-file": "warn",
			"obsidianmd/prefer-abstract-input-suggest": "error",
			"obsidianmd/regex-lookbehind": "error",
			"obsidianmd/sample-names": "error",
			"obsidianmd/validate-manifest": "error",
			"obsidianmd/vault-iterate": "error",
		},
	},
];
