import { withPluginApi } from "discourse/lib/plugin-api";

function initialize(api) {
  // init via api here
  console.log("Initializing Neo4j Theme...")

  console.log("Loading tailwind from", settings.theme_uploads.tailwind)

		// Get HTML head element
		var assetStylesheets = document.getElementsByTagName('discourse-assets-stylesheets')[0];
		// Create new link Element
		var link = document.createElement('link');
		// set the attributes for link element
		link.rel = 'stylesheet';
		link.type = 'text/css';
	
		link.href = settings.theme_uploads.tailwind

		// Append link element to HTML head
		assetStylesheets.append(link);

	if (window.innerWidth > 640) {
		api.decorateWidget('header-icons:before', helper => {
    
			return helper.h('span', {
				style: "float: left;"
			}, [
			  'Join ',
			  helper.h('a', {
				href:'https://dev.neo4j.com/42KC4ow',
			  }, 'NODES 2023'),
			  ' on Oct. 26. ',
			  helper.h('a', {
				href:'https://sessionize.com/neo4j-nodes-2023',
			  }, 'Submit Talks'),
			  ' by June 30, 2023'
			]);
		});
	}
  
}

export default {
  name: "neo4j-theme-init",

  initialize() {
    withPluginApi("0.8.28", initialize);
  }
};