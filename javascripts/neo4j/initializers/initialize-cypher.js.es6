import { withPluginApi } from "discourse/lib/plugin-api";

const cypherLang = function(e){return{case_insensitive:!0,keywords:{keyword:"as asc ascending assert by call case commit constraint create csv cypher delete desc descending detach distinct drop else end ends explain fieldterminator foreach from headers in index is join limit load match merge on optional order periodic profile remove return scan set skip start starts then union unique unwind using when where with yield",literal:"true false null"},contains:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_NUMBER_MODE,{className:"string",begin:"`",end:"`",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{className:"type",begin:/((-|>)?\s?\(|-\[)\w*:/,excludeBegin:!0,end:"\\W",excludeEnd:!0},{className:"functionCall",begin:/(\s+|,)\w+\(/,end:/\)/,keywords:{built_in:"all any exists none single coalesce endNode head id last length properties size startNode timestamp toBoolean toFloat toInteger type avg collect count max min percentileCont percentileDisc stDev stDevP sum extract filter keys labels nodes range reduce relationships reverse tail abs ceil floor rand round sign e exp log log10 sqrt acos asin atan atan2 cos cot degrees haversin pi radians sin tan left ltrim replace reverse right rtrim split substring toLower toString toUpper trim distance"}},e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE,{begin:"//",ends:"//"}]}}

/**
 * Language: Cypher
 * Contributors:
 *   Johannes Wienke <languitar@semipol.de>
 *   Gustavo Reis <gusbemacbe@gmail.com>
 */
export default {
  name: "initialize-cypher",
  initialize() {
    withPluginApi("0.8.7", api => {
      api.registerHighlightJSLanguage("cypher", cypherLang);
    });
  }
}
