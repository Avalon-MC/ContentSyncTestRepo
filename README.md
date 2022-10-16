# ContentSyncTestRepo
Dummy repo for testing ContentSync functionality


the layout of the repo doesnt matter, what matters is:
* the json file is setup correctly
* the URL paths to the zip files are DIRECT LINKS
* the datapack and resourcepack zips ARE VALID PACKS
* the KubeJS zips contain a 'client_scripts', 'server_scripts' and/or 'startup_scripts' folder (all 3 or only 1 is valid, none is not)



ContentSync will use the Name and URL given for an entry, Look for a json file like this repo's index.json and find the entry with the same Name.
These zips are not real datapacks/resourcepacks/script zips. just dummy files so i can test.



Example ContentSync config.json that is used against this repo.
Proper docs will be availible on ContentSync's repo once it is ready.
```
{
  "IsConfigured": true,
  "contentEntriesList": [
    {
      "Name": "example_entry",
      "displayName": "An Example set as datapack",
      "type": "datapack",
      "URL": "https://github.com/Avalon-MC/ContentSyncTestRepo/blob/main/index.json?raw=true",
      "targetVersion": "",
      "installedVersion": "1.0.1"
    },
    {
      "Name": "example_entry_two",
      "displayName": "An Example 2 set as kubejs",
      "type": "kubejs",
      "URL": "https://github.com/Avalon-MC/ContentSyncTestRepo/blob/main/index.json?raw=true",
      "targetVersion": "",
      "installedVersion": ""
    },
    {
      "Name": "example_entry_three",
      "displayName": "An Example 3 set as resourcepack",
      "type": "resourcepack",
      "URL": "https://github.com/Avalon-MC/ContentSyncTestRepo/blob/main/index.json?raw=true",
      "targetVersion": "",
      "installedVersion": ""
    }
  ]
}
```