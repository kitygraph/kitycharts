var ChinaMap = kc.ChinaMap = kity.createClass( 'ChinaMap', {
    base: kc.ChartElement,

    constructor: function ( param ) {
        this.callBase( kity.Utils.extend( {}, param ) );
    }
} );

ChinaMap.DATA = {
    width: 565,
    height: 475,
    provinces: {
        heilongjiang: 'M464.838,96.639l6.787-1.19l2.854,5.241l4.285,3.095l2.856-1.188h2.386l4.285-2.501l3.094,3.094l2.024,0.357l5.357-2.023l3.813,2.023l1.666,4.288h2.857l1.43,1.904l3.689,4.049l1.426-0.833l-0.594-5.12l2.026-1.432l2.854,5.716l2.621,1.074l2.858,3.212l2.021-0.357l0.836-1.427l4.523-5.12l2.022,1.428l1.43-2.022l1.431,2.619l4.283,1.429h2.86l2.07,0.088l-1.238-2.113l-0.598-6.906l-5.115-7.978l2.855-2.857l2.616-4.883h9.646l1.785-1.665l-0.597-3.69l2.025-3.691l-0.596-2.024l0.832-3.451l-0.236-17.742l2.855-5.715l-3.214-3.692l0.595-2.261l-1.427-2.024l-3.69,1.429l-4.289,4.884l-4.283,2.023l-4.289,5.951l-10.598,3.692l-4.879-3.692l0.594-2.262l-2.5-3.689l-1.191-3.811l-4.047-0.239l-7.145-3.69l-2.859,1.071l-3.33-1.667l-4.887,0.834l-4.283-1.429l-2.621-3.69l-2.498-2.857l-0.951-2.857l-3.334-3.452l-2.026-3.099l-4.644-6.31l-1.428-3.69l-5.119-6.548l-1.432-3.454l-6.549-3.216l-4.287,1.429l-3.689-0.833l-8.336-1.668l-11.07,3.932l-2.024,1.786l2.262,3.096l-2.856,7.499l0.834,0.835l4.881,3.096l2.621-4.286l4.524,2.856l-0.235,2.022l1.664,5.119l2.854,3.218l5.717,0.833l1.668-1.787l3.451-0.477l6.547-5.476l8.576,6.31l-2.858,11.669l0.594,8.333v5.119l-2.26,1.191l-0.238,13.335l-0.597-0.476l-2.26-2.858h-1.192l-0.595,1.073c0,0-8.797,13.044-7.146,10.596c1.652-2.448-3.451,4.523-3.451,4.523l0.357,1.428l7.145,4.886l3.926-1.071l0.599,1.071l-0.834,1.189l-3.689,1.667l-0.359,3.214L464.838,96.639z',
        jilin: 'M544.896,113.042l-2.07-0.088h-2.858l-4.285-1.431l-1.43-2.619l-1.431,2.024l-2.022-1.428l-4.523,5.12l-0.834,1.427l-2.022,0.357l-2.859-3.214l-2.621-1.072l-2.854-5.715l-2.027,1.431l0.594,5.12l-1.426,0.833l-3.689-4.05l-1.432-1.903h-2.854l-1.666-4.288l-3.813-2.023l-5.354,2.023l-2.025-0.357l-3.098-3.094l-4.285,2.5h-2.383l-2.857,1.191l-4.285-3.096l-2.854-5.24l-6.787,1.189l-2.621,3.099l-0.238,3.45l-7.502-2.023l-1.074,2.381l0.601,1.667l3.928,2.859v4.046l0.594,3.929l2.265,3.456l0.356,3.095l1.666,1.191l5.717-5.479l5.953,7.502v4.288l3.213,1.667l0.238-1.431l4.885,1.431l3.451,4.046l1.666-1.784l0.357-1.074l8.217,11.075l0.594,4.286l4.527,5.239l0.592,4.761l4.051-2.499l3.689-10.598l1.67-0.595l4.047,2.263l6.549-0.834l2.26-2.024l-3.092-4.763l0.832-1.191c0,0,7.84-2.611,6.072-2.022c-1.766,0.588,2.5-4.883,2.5-4.883l3.215-1.428l0.238-4.766l0.832-3.212l1.785-0.596l1.668,1.789l1.668,1.426l4.287-5.715l1.188-4.288L544.896,113.042z',
        liaoning: 'M491.15,173.2l6.783-10.002l4.287-4.881l-0.595-4.763l-4.524-5.239l-0.594-4.286l-8.216-11.075l-0.358,1.074l-1.666,1.786l-3.453-4.05l-4.883-1.429l-0.236,1.429v2.264l-2.022,2.022l-4.047,4.05H467.1l-1.666,2.856h-1.789l-3.094,3.096h-1.787l-3.691,3.691l-2.262,0.596l-4.881,7.5l-3.096-4.644l-3.453-2.262l-1.666,1.667l1.903,10.002l-1.666,3.453l-1.668,5.12l4.763,3.215l2.621,0.238l3.45,4.881l2.5-1.429c0,0,2.857-2.881,4.05-4.882c1.192-2.002,4.049-6.788,4.049-6.788l6.787-1.429l4.287,4.286l-3.099,6.787l-4.049,6.311l3.688,2.62l-0.233,3.098l-2.857,2.855l0.597,1.19l4.881-2.619l7.143-9.407l10.836-6.072L491.15,173.2z',
        hebei: 'M413.04,235.229l0.357-1.426l-1.783-3.453l6.902-12.5c0,0,8.725-7.9,6.313-5.718c-2.411,2.185,4.523-1.188,4.523-1.188l4.268-5.423l-1.647-1.125l-1.56-3.907l-3.319,1.286l-5.479-1.428l-0.237-1.428l-0.238-9.17l3.69-1.667l-0.419-1.563l-0.177-0.104l0.81-3.557l-5.094,2.128l0.832,1.905l0.178,1.424l0.18,1.433l-2.857,1.19l-1.785,1.667l-3.692-1.071l-4.881,0.834l-0.832-2.264l0.594-4.287l3.693-4.286l0.831-4.88l3.691-3.691l6.666,3.454h1.668l1.189,4.762l1.905,0.95l0.953,3.1l-0.356,2.024l4.047,2.854l0.594,2.264l3.338,1.428l8.332-4.523v-2.621l4.883-7.143l-3.45-4.881l-2.621-0.238l-4.763-3.218l1.668-5.118l-7.387-0.595l-3.213-4.765l0.357-2.619l-6.31-6.906l-4.051,2.026l-3.451,3.452l1.191,2.62l-0.834,1.667l-4.882,0.237l-2.264,2.022l-2.022-0.835l-2.021,2.026l-4.527,3.453l-2.024-1.43v-4.644l-1.666-0.832l-2.619,1.189l-3.096,6.547l-1.189,6.311l3.689,6.19l3.215,2.858v5.24l1.904,4.286l-0.834,4.764l-4.884,3.213l-2.26,7.382l4.049,4.645l2.857,5.717l-1.785,2.857l-0.477,3.928l-1.787,2.619l-0.834,2.859l2.621,3.446l11.43,1.431l4.524-1.787L413.04,235.229z',
        shandong: 'M425.661,252.611l0.597-2.856l2.5-1.069l4.645,3.927h1.433l4.284-0.476l2.5-2.022l3.453,2.856l1.429-2.62l0.356-1.43l2.857-1.667l0.834-3.45l2.854-0.595l7.98-13.454l-1.429-2.264l1.429-1.427l1.666,0.595l2.619-1.429l1.432-3.094l6.545-6.073l5.121-1.666l2.381-2.266l-0.592-4.88l-3.457-0.355l-7.738,0.952l-5.356-2.62l-3.216,0.596l-7.977,10.239l-2.262,1.429l-5.117-2.263l-0.359-2.619l-1.069-4.523l-2.859-1.669l-4.643,1.073l-2.882-1.971l-4.266,5.423l-4.523,1.188c0,0-8.514,7.798-6.313,5.718c2.201-2.081-6.902,12.5-6.902,12.5l1.783,3.45l-0.357,1.431v1.666l0.957,1.429l2.261-1.669l3.69-0.834l-10.002,11.074v2.621l2.023,0.596l4.524,3.93l7.146-0.835L425.661,252.611z',
        jiangsu: 'M483.646,282.616l-1.426,4.286l-1.898,2.251l-3.225,3.824l-4.879-0.835l-3.929-2.383l-2.383,1.19l-8.571-0.832l-0.238-3.454l-4.287-2.856l-1.428-2.618l2.02-2.264v-1.665v-2.267l5.121-0.594l0.24-2.023l-1.666-2.263l-2.621-0.355l-1.666,2.854l-4.287-0.831l-1.188-2.263l-2.857-1.666l0.955-6.074l-0.598-1.072l-2.859,0.479l-2.021-1.667l-5.118-1.429l-2.861-2.857l-6.307-2.621l0.592-2.856l2.5-1.069l4.645,3.927h1.433l4.284-0.476l2.5-2.022l3.453,2.856l1.427-2.62l0.358-1.43l2.857-1.667l0.834-3.45l2.854-0.597l7.148,4.881c0,0,3.365,0.754,5.117,2.025c1.754,1.271,9.766,16.313,9.766,16.313l-0.357,1.666l6.548,3.095l1.784,2.859l3.099,1.429l1.428,2.855l-2.023,0.951l-3.334-1.188h-4.645l-4.287-1.432l-1.666,1.432l3.932,1.188l3.813,1.669L483.646,282.616z',
        zhejiang: 'M483.793,336.063l-6.455,2.276l-3.693-3.69l-2.498,3.215h-4.049l-1.666-3.454l-2.023-5.118l-3.692-0.596l-4.047-7.501l-2.619-3.69l1.903-1.818l0.716-0.685c0,0,6.241-8.84,4.286-6.07c-1.954,2.769-0.239-4.882-0.239-4.882l1.43-1.906l3.336-0.594l0.951-1.43l-1.189-2.263l1.666-2.382v-4.524l2.384-1.189l3.928,2.382l4.879,0.835l3.225-3.824l3.998,3.332l-1.744,1.324l-2.021,3.096l-3.217,0.952l-1.074,0.833l3.098,1.666l5.715-2.499l9.406,3.929l0.953,7.979h-3.809l-0.24,2.382l2.024,3.332l-1.784,2.024l2.022,3.214l-3.096,3.69l-1.43-1.787l-4.644,11.788L483.793,336.063z',
        anhui: 'M423.637,253.208l2.024-0.597l6.312,2.621c0,0,1.768,2.299,2.861,2.856c1.092,0.557,5.118,1.43,5.118,1.43l2.021,1.667l2.858-0.479l0.599,1.072l-0.957,6.074l2.858,1.666l1.189,2.263l4.287,0.831l1.666-2.854l2.621,0.356l1.666,2.265l-0.24,2.021l-5.121,0.596v2.264v1.665l-2.021,2.265l1.43,2.618l4.287,2.856l0.237,3.454l8.572,0.832v4.525l-1.666,2.381l1.191,2.263l-0.951,1.43l-3.338,0.594l-1.428,1.906l0.235,4.882l-4.285,6.072l-0.715,0.683l-2.381-2.111H446.5l-2.498-2.855l-4.884,4.761l-1.786-0.834l2.026-3.69l-0.24-1.188l-1.786-0.479l-5.718,3.099l-5.356-10.241l1.666-3.214l-0.595-1.071l-2.858-0.952l-4.76-2.858l1.903-3.928l2.855-1.43l0.598-3.214l-1.07-5.716l-0.596-0.479l-2.856,2.86c0,0-5.978-4.647-4.287-3.453c1.69,1.192-3.217-4.049-3.217-4.049l3.217-2.261l0.834-4.05l2.021-1.431l-0.354-5.359l1.43-1.188l2.619,1.787l1.664,2.26l3.453-2.26l1.192-1.434l-0.598-2.617l-4.049-2.263L423.637,253.208z',
        henan: 'M371.131,276.068l9.405,8.336l7.742,1.665l7.144-1.072l2.262,1.072l2.5-1.43l1.783,1.787l0.834,2.856l3.455,1.905h4.524l3.451,2.857l3.098-1.428l2.382,1.428l1.903-3.929l2.855-1.43l0.598-3.216l-1.07-5.715l-0.596-0.479l-2.856,2.86l-4.287-3.453l-3.218-4.049l3.218-2.263l0.834-4.048l2.021-1.431l-0.354-5.359l1.43-1.188l2.619,1.787l1.664,2.26l3.455-2.26l1.19-1.434l-0.598-2.617l-4.049-2.263l-0.834-2.619l-7.142,0.835l-4.524-3.93l-2.021-0.596v-2.621l10-11.074l-3.69,0.834l-2.261,1.669l-0.957-1.429v-1.666l-1.663-0.6l-4.525,1.785l-11.43-1.428l-0.597,9.408c0,0-6.604,5.169-5.479,4.287c1.129-0.884-7.381,1.429-7.381,1.429l-10.359,7.142l-8.215,2.264v1.43l7.738,11.666L371.131,276.068L371.131,276.068z',
        shanxi: 'M363.393,259.519l8.217-2.265l10.357-7.142l7.381-1.431l5.477-4.287l0.599-9.405l-2.623-3.449l0.836-2.856l1.787-2.619l0.477-3.929l1.785-2.86l-2.859-5.713l-4.047-4.645l2.262-7.383l4.886-3.212l0.83-4.765l-1.904-4.286v-5.242l-3.215-2.854l-7.381,3.809l-1.191-1.189l-3.93,2.855l-3.213-0.235l-6.312,9.048h-1.906l-3.452,2.858l0.237,4.046l-1.67,3.452l-0.594,4.525l-3.096,4.884l3.334,6.905l-1.07,3.929l-2.619,4.286c0,0,4.146,18.996,3.689,16.903s-2.498,8.81-2.498,8.81L363.393,259.519z',
        shaanxi: 'M363.393,259.519l-1.428-3.454l2.498-8.81l-3.689-16.903c0,0,3.262-5.777,2.619-4.286c-0.646,1.49,1.07-3.929,1.07-3.929l-3.334-6.905l3.096-4.884l0.594-4.525l1.67-3.452l-0.238-4.046l-1.432-1.074l-2.26,2.502l-6.072,0.356l-3.096,4.526l0.236,2.62l-0.593,1.665l-2.502,0.834l-9.406,13.454l-1.19-0.836l-2.617-0.594l-5.359,0.359l-1.789,2.499l-0.233,5.478l0.834,1.667l9.166,4.637l4.883,3.099l0.832,2.855l-2.619,3.691l1.431,4.286l-0.835,2.021l-6.784,0.6l-1.433,0.835l0.478,1.188v1.904l-5.355,0.596l-2.856-1.428h-3.691l-0.596,0.832l0.596,2.026l-1.789,2.022l-0.592,2.261l3.451,2.861l-2.5,5.117l1.071,2.619l-0.237,1.191h-4.052l-2.854,1.429l2.262,3.098l-1.43,4.048l2.383,0.478l0.238,2.617l2.021,0.237l7.386-1.427l1.43,0.593l0.354,2.025l3.099,0.835l6.547,3.216l3.69-1.434l8.097,2.857l1.666,2.26l4.051-0.829l-0.596-4.288l-0.834-1.191l0.834-3.451l4.286-2.021l1.068-1.668l-2.26-0.837l-2.5-0.593l-2.619-2.62l1.189-1.068h8.571h1.908l1.189,0.83l2.616-2.022v-3.454l-7.737-11.668L363.393,259.519L363.393,259.519z',
        gansu: 'M196.462,200.108l-1.43-16.55l0.836-3.453l4.879-2.262c0,0,5.209-5.03,6.903-5.717c1.696-0.686,10.6-4.285,10.6-4.285l4.285-2.025v-4.047l1.905-2.262l1.788,0.237l7.144,1.192l-0.358,3.095l1.43,4.88l-0.834,7.978l6.072,8.929l3.097,2.026l4.883-3.812h10.237l2.623,0.953l1.429,2.264l-1.193,2.499l-5.714,4.645l0.597,2.261l6.549,4.882h2.618l0.834,1.07l-0.596,2.025l4.05,3.217l9.404,1.429l4.525-1.19l5.718-5.719l6.903,0.598l2.855,4.287l-1.664,3.929l0.475,2.382l-3.688,2.263l-1.668,2.024l0.596,4.763l6.545,4.646l2.875-0.653l7.725,9.458l1.668,7.145l-0.834,3.451l5.357,2.859v2.26l4.883,1.192h1.426v-4.05l3.693-0.595l0.951-4.763l-2.619-2.026l-2.025-2.021l0.834-9.166l2.023-1.071l3.453,1.43l1.432-0.598l0.834,1.667l9.166,4.639l4.883,3.1l0.832,2.856l-2.619,3.691l1.431,4.285l-0.834,2.021l-6.785,0.6l-1.433,0.833l0.478,1.191v1.903l-5.355,0.594l-2.856-1.428h-3.691l-0.596,0.834l0.596,2.024l-1.789,2.023l-0.592,2.262l3.449,2.857l-2.498,5.119l1.072,2.622l-0.238,1.188h-4.051l-2.854,1.435l2.26,3.091l-1.428,4.051l-4.287,1.07l0.357,2.023l-1.189,1.428l-7.383-0.596l-2.854-2.021l-0.601-4.525l-1.664-1.669l-2.62,1.669l-4.523-4.521l-3.455-2.385l-0.354-3.335l-1.074-2.619h-1.787l-7.144,3.096l0.356,3.454h-2.618l-4.287-4.288l-4.525-0.593l-1.786-2.499l1.431-2.86l2.617,2.5l3.097,0.954l2.62-2.025v-4.881l2.857-2.62l2.265-2.263l-1.073-2.856l5.716-4.522l0.832-7.147l-2.619-3.688l-1.429-6.071l-7.144-9.405l-3.692,1.431l-5.118-4.524l-6.907-4.287l-2.856-6.905l-5.359,2.023l-9.999-6.309l-4.883,2.616l-7.501-1.188l-5.714,3.452l-3.691,0.237l-5.715-3.451l-3.93-2.265L196.462,200.108z',
        hubei: 'M356.486,329.29l1.787-4.048l5.119-4.287l4.881,2.026l3.096-2.026l-2.621-3.093l1.429-1.433l13.219,0.836l4.525,3.097l2.264,1.425l3.451-2.26l2.619-0.833l0.596,3.093h1.904l1.43-2.021l2.856-2.86l1.431,2.027v4.049l1.19,1.667l2.619,0.594l2.855-2.854l4.287-1.433l7.979-7.381l3.691,0.236l4.522-1.428l-5.358-10.24l1.668-3.214l-0.593-1.071l-2.862-0.952l-4.761-2.858l-2.381-1.427l-3.098,1.427l-3.451-2.854h-4.524l-3.455-1.907l-0.83-2.856l-1.787-1.786l-2.5,1.428L395.421,285c0,0-9.509,0.927-7.146,1.071c2.363,0.146-7.736-1.666-7.736-1.666l-9.407-8.334l-2.619,2.023l-1.188-0.831h-1.907h-8.572l-1.189,1.068l2.619,2.62l2.5,0.593l2.26,0.837l-1.067,1.668l-4.287,2.021l-0.834,3.451l0.834,1.191l0.596,4.288l2.5,0.238l2.619,3.452l1.07,6.548l-0.832,2.262l-1.666-0.594l-4.883,3.812l-8.336,1.429l-2.261,2.263l1.783,2.262l0.24,4.882l2.262,0.598L356.486,329.29z',
        jiangxi: 'M408.279,325.242l3.336,6.549l0.355,3.452l-1.785,3.454l-2.502,2.024l-0.594,6.188l0.832,0.955l1.43-0.596l0.834,0.596v3.927l1.785,4.647l2.026,0.831l0.234,6.789l-1.193,4.642l1.193,2.021l2.266,2.265l5.474-1.429l1.071,2.022l-1.665,2.263l-2.859,4.287v1.07l1.67,1.192l11.43-4.525l4.047,2.263l1.191-1.19l-1.191-2.499l0.281-1.663l1.742-10.365l1.67-2.62l0.832-2.854l2.025-4.286l-1.072-1.668l0.238-3.691l4.881-5.475l-0.355-3.691l3.213-5.478l3.095,0.834l6.311-4.524l1.193-2.263l-4.049-7.501l-2.619-3.69l1.901-1.818l-2.381-2.111H446.5l-2.5-2.855l-4.884,4.762l-1.784-0.835l2.024-3.69l-0.24-1.188l-1.784-0.479l-5.716,3.099l-4.524,1.429l-3.689-0.238c0,0-9.709,9.669-7.979,7.381c1.731-2.287-4.287,1.433-4.287,1.433L408.279,325.242z',
        fujian: 'M435.945,374.779c0,0,2.881-12.508,1.742-10.365c-1.137,2.144,1.672-2.62,1.672-2.62l0.83-2.854l2.023-4.286l-1.072-1.668l0.24-3.691l4.881-5.475l-0.357-3.691l3.215-5.478l3.095,0.834l6.311-4.524l1.193-2.26l3.69,0.593l2.025,5.118l1.666,3.454h4.047l2.498-3.215l3.693,3.69l6.454-2.276l-4.069,9.776l-2.385-1.192l-1.666,0.835l-0.238,0.954l2.262,2.501l-0.598,8.929l0.598,2.859l-0.598,0.834l-2.617-0.599l-1.668,1.667l1.191,2.384l-3.214,3.095l0.595,1.189l-3.097,1.665l0.478,2.264l-1.072,1.191h-4.285l-2.264,2.025l-0.357,0.832l2.023,1.428l-2.26,3.452l-2.859,3.691l-1.189-0.356l-3.1,3.216l-3.447-7.502l-3.098-3.929l-2.023,0.24l-1.43-1.072L435.945,374.779z',
        hunan: 'M408.279,325.242l-2.619-0.594l-1.188-1.667v-4.05l-1.43-2.026l-2.857,2.86l-1.43,2.023h-1.904l-0.594-3.096l-2.621,0.833l-3.451,2.263l-2.264-1.428c0,0-2.666-2.521-4.525-3.097c-1.857-0.576-13.217-0.832-13.217-0.832l-1.43,1.429l2.62,3.093l-3.096,2.026l-4.883-2.026l-5.117,4.287l-1.787,4.05c0,0-0.19,6.479,0.357,9.405c0.551,2.926,2.5,10.002,2.5,10.002l-5.717,6.31l0.596,0.833l5.121-1.428l1.785,2.263l-1.429,7.144l2.857,5.121l2.856,0.832l2.857-3.931l1.43,3.099l0.834-0.238l4.523-4.288l1.191,0.24l2.021-1.073l3.693,1.073v4.048l2.856,0.595l-0.832,3.929l-2.623,4.29l-1.188,3.688h1.188l3.103-2.854l2.617,5.713l2.021-1.43h2.264l2.263-1.666v-3.45l1.188-1.072l2.859,0.235l4.879,2.264l0.834-1.667l-1.188-2.023l0.354-1.429l3.098-2.619l5.478,1.428l3.096-1.906l-1.193-2.021l1.193-4.642l-0.234-6.789l-2.026-0.831l-1.785-4.647v-3.927l-0.834-0.596l-1.43,0.596l-0.832-0.955l0.594-6.188l2.502-2.024l1.785-3.454l-0.355-3.452L408.279,325.242z',
        guizhou: 'M313.622,349.296l-1.666,4.761l-2.856,0.951l-6.313-0.951l-1.43,1.429l-3.453-1.07l-3.094,4.286l1.428,1.43v2.856l1.431,2.501l6.309-1.906l1.908,1.667l-2.859,12.027l3.81,3.689l-1.188,6.907l3.688,0.238l4.051-3.695l1.668,1.073l7.737,3.216l1.429-0.832l0.235-2.622l1.433-1.429l10.955-7.144l1.903,2.265l6.668,2.021l3.689-4.883l1.668,1.192h2.619v-1.432l3.453-1.189v-1.071l1.43-1.428l0.832,0.237l3.453-3.452l-2.857-5.123l1.429-7.142l-1.785-2.263l-5.121,1.428l-0.596-0.834l5.717-6.309l-2.5-10.001l-3.81,2.855l-3.334-3.45l-3.215-4.29l-0.24-2.619l-2.26-0.477l-2.621,0.834l-4.287-2.024l-2.022,4.883l-3.691,0.239l-2.619,4.049l-1.666-0.834l-2.623,0.834l-3.928-2.266l-3.213,3.69v1.668l6.312,3.453l1.426,2.621c0,0-6.094,2.245-4.523,1.667C322.1,348.955,313.622,349.296,313.622,349.296z',
        sichuan: 'M279.33,280.95l1.788-4.05l-2.025-2.261l-0.357-3.454l7.145-3.096h1.787l1.069,2.619l0.357,3.336l3.455,2.384l4.522,4.521l2.621-1.669l1.664,1.669l0.6,4.525l2.855,2.021l7.383,0.599l1.189-1.431l-0.357-2.023l4.287-1.07l2.381,0.478l0.238,2.617l2.024,0.237l7.382-1.427l1.43,0.593l0.354,2.026l3.099,0.834l6.549,3.214v7.47l-3.932,1.059l-1.351,7.671l-5.346,3.72l-1.014,5.811l-4.564-2.092l-5.58,2.092l-0.231,4.416l-0.464,4.53l6.507,4.07l2.28,6.977l-2.623,0.833l-3.928-2.263l-3.213,3.691v1.666l6.311,3.452l1.427,2.62l-4.523,1.666l-6.904-0.238l-0.831-2.855l-2.621-0.954l-4.285,2.623l-2.859-1.429l-0.238-3.694l-1.43-1.786v-1.903l-4.047-0.952l-1.072,1.188l0.599,2.858l-3.215,1.431l-0.836,2.021l0.836,2.504l-7.146,8.334l1.191,9.764l-3.453,2.855l-1.666-1.784l-6.906,4.049l-2.621-1.431l-10.001-19.17l-3.931-2.854l-3.216-0.835l-1.428-2.623l1.787-2.854l-2.857-2.264l-3.455,2.858l-3.45,0.595l-2.264-10.359l-0.597-2.499c0,0-2.04-22.568-0.594-16.55c1.446,6.017-3.099-8.336-3.099-8.336l2.267-1.665l-6.55-12.027l-7.977-6.311l1.069-3.692l0.953-1.188l11.669-1.666l7.738,2.262l4.523-1.431l1.785,2.859l5.717,5.715l4.524-0.833v-3.453l1.191-2.266l4.522-1.783l1.667,2.856l2.621-1.903l3.689,0.478v-0.241H279.33z',
        yunnan: 'M313.622,349.296l-0.836-2.858l-2.618-0.954l-4.283,2.622l-2.859-1.432l-0.238-3.688l-1.43-1.79v-1.903l-4.049-0.952l-1.07,1.188l0.599,2.859l-3.217,1.43l-0.834,2.021l0.834,2.5l-7.146,8.336l1.191,9.766l-3.453,2.854l-1.666-1.784l-6.907,4.048l-2.618-1.431c0,0-11.535-22.106-10.002-19.172c1.533,2.938-3.931-2.854-3.931-2.854l-3.213-0.834l-1.432-2.619l1.787-2.859l-2.857-2.263l-3.455,2.859l-3.451,0.598l-2.263-10.363l-0.596-2.499l-3.454,4.286l-1.427,0.831l0.356,6.551l-0.834,1.431h-1.784l-1.43-1.431l-1.667,2.026l1.667,7.381h2.024l1.667,1.19c0,0,0.468,2.396,0.594,4.521c0.125,2.125-0.833,15.719-0.833,15.719l-10.837,9.766l-0.594,3.689l-2.024,1.787l-0.238,1.903l1.669,4.643l-1.431,3.454l0.834,0.478l5.478-1.433l7.738-0.476l-0.834,3.098l1.431,2.857l0.475,4.287l0.955,1.426l4.524,0.243l2.024,1.425l-2.264,2.856l-0.356,3.453l-1.667,4.05l1.068,1.43l2.86,0.238l4.881,1.784l-0.593,1.667l3.212,4.881h4.524l5.716-3.213l1.786,0.952v1.906l0.832,2.856l1.432,1.429l3.092-0.477l1.192,0.834l1.072-1.192v-4.525l-1.906-8.333l1.431-2.5h4.762h1.192l2.62-3.213l6.783,2.261l2.858-2.503l1.431,1.432l2.858-1.786l2.615,2.618h1.073l0.953-1.428l2.261-2.263l1.073,0.833l3.213-0.595l3.099-2.502l2.619-3.811l3.688-0.831l2.023,2.021l1.43-4.048l2.857-0.235l1.069-0.834l0.957-3.691l-1.192-2.023l-9.765-1.785l-1.668-2.857h-2.854h-2.619l-1.906-3.097l0.24-1.665l1.188-6.907l-3.809-3.689l2.859-12.027l-1.908-1.667l-6.309,1.906l-1.431-2.501v-2.856l-1.428-1.43l3.094-4.286l3.453,1.07l1.43-1.429l6.313,0.951l2.856-0.951L313.622,349.296z',
        qinghai: 'M153.954,234.989l4.523,1.667l7.742-2.617l-1.193-1.429h-2.021l-0.834-2.259l0.594-2.024l3.692-1.668l2.617-4.286l-7.977-6.548l-0.356-6.906c0,0,2.08-2.545,3.689-2.856c1.609-0.313,26.317-5.119,26.317-5.119l1.783-1.428l3.931,0.594l13.215,3.095l3.93,2.265l5.714,3.451l3.692-0.237l5.714-3.452l7.501,1.188l4.882-2.616l9.999,6.309l5.36-2.023l2.856,6.903l6.907,4.286l5.119,4.527l3.691-1.431l7.146,9.405l1.426,6.071l2.619,3.688l-0.832,7.146l-5.715,4.524l1.073,2.856l-2.265,2.263l-2.856,2.62v4.879l-2.621,2.027l-3.097-0.954l-2.617-2.5l-1.431,2.859l1.787,2.499l4.524,0.594l4.287,4.288h2.618l2.024,2.265l-1.787,4.046v0.239l-3.688-0.479l-2.621,1.905l-1.666-2.856l-4.524,1.785l-1.19,2.264v3.451l-4.524,0.836l-5.715-5.716l-1.787-2.856l-4.524,1.428l-7.738-2.262l-11.67,1.666l-0.952,1.189l-1.071,3.69l-2.263,1.43l0.238,3.692l-6.906,8.931l-11.43-2.383l-0.833-4.285l-7.146-5.718l-15.717-2.498l-6.786-1.19l-2.621-0.238l-5.953-4.883l-12.384-2.857l-8.57-16.551l-0.238-4.642l3.451-1.672v-5.117l2.502-6.313l-2.858-2.856L153.954,234.989z',
        hainan: 'M385.895,447.523l-5.119,8.93v3.929l-10.238,8.336l-10.598-3.689l-2.025-7.501l0.597-3.454c0,0,8.074-8.075,5.715-5.716c-2.357,2.358,2.025-1.665,2.025-1.665l9.403-1.668l4.289-0.358l1.426-1.666l3.103,0.832L385.895,447.523z',
        shanghai: 'M484.32,292.485l-3.998-3.332c0,0,0.867-0.375,1.898-2.251c1.031-1.875,1.426-4.286,1.426-4.286l4.287,1.788l2.027,2.854l-1.433,2.024L484.32,292.485z',
        chongqing: 'M318.986,317.871l5.58-2.092l4.564,2.092l1.014-5.811l5.346-3.72l1.351-7.671l3.932-1.059v-7.47l3.689-1.432l8.096,2.857l1.666,2.26l4.051-0.829l2.5,0.238l2.619,3.452l1.07,6.548l-0.832,2.262l-1.666-0.594c0,0-3.072,3.501-4.884,3.812c-1.809,0.311-8.336,1.429-8.336,1.429l-2.26,2.263l1.783,2.262l0.24,4.883l2.262,0.597l5.715,7.142l0.357,9.407l-3.218,2.412l-0.592,0.445l-3.334-3.451l-3.215-4.29l-0.24-2.619l-2.26-0.476l-2.621,0.834l-4.287-2.025l-2.022,4.883l-3.691,0.239l-2.619,4.049l-1.666-0.834l-2.28-6.977l-6.507-4.07L318.986,317.871z',
        tianjin: 'M430.413,200.491c0,0-1.832,1.672-3.319,1.284c-1.49-0.388-5.479-1.428-5.479-1.428l-0.237-1.429l-0.238-9.169l3.69-1.667l-0.596-1.666l0.81-3.557l0.385-1.683l1.901,0.95l0.953,3.098l-0.356,2.022l4.047,2.858l0.594,2.263l-2.379,1.668l-0.834,3.809L430.413,200.491z',
        beijing: 'M421.139,189.75l-0.357-2.856l-0.832-1.905l5.095-2.126l0.381-1.683l-1.189-4.767h-1.668l-6.666-3.449l-3.69,3.69c0,0-1.125,6.585-0.832,4.88c0.289-1.704-3.693,4.288-3.693,4.288l-0.594,4.286l0.832,2.263l4.881-0.834l3.693,1.071l1.784-1.667L421.139,189.75z',
        ningxia: 'M329.934,230.111l0.24-5.476l1.785-2.499l-0.832-2.62l-9.168-3.454l0.594-3.691l2.858-4.049l-1.786-6.19l-0.835-0.952l-5.954,4.049l-2.855,9.168l-0.953,6.31l-4.762,3.93l-2.859,1.189l-3.438,0.779c0,0,9.184,11.236,7.729,9.458c-1.455-1.78,1.664,7.146,1.664,7.146l-0.834,3.449l5.357,2.859v2.262l4.881,1.19h1.43v-4.048l3.691-0.597l0.951-4.763l-2.619-2.026l-2.023-2.021l0.832-9.163l2.023-1.073l3.453,1.43L329.934,230.111z',
        neimongol: 'M301.969,226.604l3.438-0.779l2.859-1.188l4.762-3.932l0.953-6.31l2.855-9.168l5.954-4.048l0.835,0.951l1.786,6.19l-2.858,4.049l-0.594,3.691l9.168,3.453l0.832,2.621l5.358-0.359l2.617,0.596l1.191,0.834l9.405-13.454l2.502-0.835l0.593-1.664l-0.236-2.623l3.096-4.523l6.072-0.358l2.262-2.5l1.431,1.074l3.452-2.86h1.904l6.312-9.046l3.215,0.235l3.93-2.855l1.191,1.189l7.381-3.809l-3.689-6.193l1.189-6.311l3.096-6.549l2.619-1.188l1.666,0.832v4.644l2.025,1.43l4.526-3.453l2.021-2.026l2.022,0.835l2.265-2.025l4.881-0.234l0.834-1.667l-1.191-2.622l3.453-3.452l4.049-2.024l6.31,6.908l-0.355,2.618l3.213,4.763l7.385,0.595l1.666-3.453l-1.903-10.002l1.666-1.667l3.453,2.262l3.096,4.644l4.881-7.5l2.264-0.596l3.689-3.692h1.787l3.094-3.095h1.787l1.666-2.856h4.527l4.047-4.051l2.021-2.021v-2.264l-3.213-1.667v-4.286l-5.953-7.502l-5.717,5.478l-1.666-1.19l-0.357-3.096l-2.264-3.453l-0.594-3.931v-4.046l-3.928-2.858l-0.601-1.667l1.074-2.382l7.502,2.022l0.238-3.452l2.621-3.099l-1.789-1.666l0.358-3.214l3.689-1.667l0.834-1.19l-0.598-1.07l-3.927,1.07l-7.145-4.882l-0.357-1.43l3.453-4.524l7.146-10.597l0.594-1.072h1.193l2.26,2.858l0.596,0.479l0.238-13.336l2.26-1.191v-5.121l-0.594-8.333l2.858-11.668l-8.575-6.312l-6.548,5.478l-3.45,0.476l-1.668,1.786l-5.718-0.832l-2.854-3.215l-1.664-5.122l0.236-2.021l-4.525-2.858l-2.621,4.289l-4.881-3.096l-0.834-0.835l2.856-7.5L433.4,7.223h-2.024l-5.119,3.688l-4.285,6.311l1.668,1.071l3.211,0.359l2.504,6.548l-1.43,2.618l-2.502,3.689l-4.644,17.147l1.785,2.856l-1.428,2.498l-10.599,7.742l-5.713-1.071l-3.215-1.191l-0.479,1.667l-4.642,18.577l-2.264,2.378l1.191,3.335l2.854,2.382l4.764-2.623l7.74,0.598l2.26-3.692l4.052-0.951l7.737,2.856l9.408,9.765v2.023l-2.024,1.429l-10.836,0.599l-3.691,2.854l-2.857-0.355l-2.022,3.214l-5.121,1.07l-3.457,5.12l-0.592,3.81l-7.379,4.763l-4.646,0.598l-5.119,6.904l-4.883,2.859l-9.408-2.025l-3.092-1.431l-3.692,3.694l-1.785,6.548l5.119,7.501l-3.335,3.451l-4.643,2.859c0,0-8.422,10.638-6.787,8.571c1.637-2.064-6.619,3.36-8.93,3.93c-2.31,0.568-14.525,1.429-14.525,1.429l-2.264-0.237l-16.906,7.144l-7.742,4.881l-2.262-1.19l-0.83-2.262l-10.36-0.597l-11.909-3.688l-3.211-3.69l-17.385-2.025l-3.217,1.43l-21.072-2.022l-0.358,3.095l1.43,4.883l-0.834,7.976l6.073,8.929l3.096,2.026l4.883-3.812h10.237l2.623,0.953l1.426,2.262l-1.19,2.5l-5.714,4.646l0.597,2.261l6.549,4.88h2.618l0.834,1.072l-0.596,2.023l4.05,3.217l9.403,1.429l4.527-1.19l5.716-5.719l6.903,0.598l2.857,4.289l-1.664,3.926l0.473,2.382l-3.688,2.263l-1.668,2.024l0.596,4.76l6.545,4.647L301.969,226.604z',
        guangxi: 'M305.646,387.87l3.688,0.241l4.051-3.694l1.668,1.072l7.737,3.216l1.429-0.835l0.235-2.619l1.433-1.429l10.955-7.145l1.903,2.266l6.668,2.021l3.691-4.883l1.666,1.192h2.619v-1.431l3.453-1.192v-1.069l1.43-1.428l0.832,0.236l3.453-3.451l2.856,0.832l2.857-3.931l1.432,3.099l0.832-0.238l4.525-4.288l1.188,0.24l2.021-1.073l3.693,1.073v4.048l2.856,0.595l-0.832,3.929l-2.623,4.29l-1.188,3.688h1.188l3.101-2.854l2.616,5.713l2.025-1.43h2.26l1.666,5.717l-1.666,2.383l0.24,2.5l-5.119,6.547l0.355,6.905l-6.668,5.12l-0.476,4.285l-3.809,1.787l0.354,2.5l-3.694,0.831l-2.853,4.646l-7.502,1.071l-3.93-2.856l-4.049-1.669l-4.049,4.05l-4.158,0.241l-4.058,0.234c0,0-10.996-6.139-9.168-5.119c1.828,1.021-1.666-4.526-1.666-4.526l2.261-4.646l-2.617-1.902h-3.455l-0.832-0.952l-3.691,0.952l-3.692-2.62l1.432-4.048l2.855-0.235l1.069-0.834l0.957-3.69l-1.192-2.024l-9.765-1.785l-1.668-2.856h-2.854h-2.619l-1.906-3.099L305.646,387.87z',
        xinjiang: 'M153.889,69.508l2.327-0.014l-1.428,4.525l2.025,2.38l0.236,1.666l4.525,4.524l1.191,3.453l5.953,0.357l2.62,2.265h1.429l3.453,7.379l3.451,8.931l-1.784,5.357l0.358,2.025l-3.215,5.477l0.833,4.286l11.192,4.763l12.025,1.788l12.503,8.571l4.049,1.429l0.237,2.261l2.619,5.478l2.619,7.146l3.333,5.953l-1.903,2.263v4.047l-4.286,2.026l-10.596,4.284l-6.907,5.719l-4.881,2.26l-0.834,3.453l1.43,16.55l-3.931-0.596l-1.783,1.431l-26.315,5.119l-3.691,2.856l0.358,6.906l7.978,6.548l-2.62,4.286l-3.69,1.668l-0.597,2.024l0.835,2.259h2.021l1.192,1.429l-7.738,2.617l-4.525-1.667l-2.382-1.424h-5.715l-10.24-4.642h-6.546l-5.121,1.428h-5.714l-8.931,4.879l-7.143-0.834l-7.145,2.5l-5.956-1.907l-3.689-3.211l-9.525-1.427l-6.191,4.28l-3.452-1.425l-2.858-2.263l-6.907-1.667l-1.07-1.189l-2.857-0.237l-9.782,5.945l-10.037-1.25l-0.822-0.359l1.113-8.623l-4.524-1.191l-9.406-6.902l-2.62-0.241l-2.023-4.525l1.427-4.643l-0.477-2.26l-3.451-2.266l-1.192-2.26l-7.143-4.049v-1.189l3.452-1.431l2.023,1.19l2.025-2.025l-0.598-6.785l0.598-5.716l-4.646-4.642l-3.095,0.833l-1.189-3.336l1.785-3.452l-0.952-3.214l3.038-2.749l1.248-1.182v-2.618l4.285-2.024l4.286-0.833l3.811-1.429l3.099,0.832l2.26-0.832l0.833,0.595l0.356,2.859l2.022,0.832l4.765-0.238c0,0,3.566-4.729,5.478-6.073c1.911-1.346,11.19,2.381,11.19,2.381l5.717-4.048l16.552-3.689l1.069-2.264l1.43-6.31l4.643-3.69h1.433v-1.906l0.236-15.836l0.833-3.212l-4.521-1.668l-0.24-1.191l4.762-1.428l12.384-1.073l1.905,2.501l4.287,0.952l1.192,0.239l1.665-2.262l-2.265-2.263l9.169-18.574l1.431-0.953l8.335,4.047h3.689l1.667,2.264l7.979-2.502l2.023-13.212l3.452-2.265l4.048-0.238l2.859-3.452l1.071-3.454l2.263-1.191L153.889,69.508z',
        xizang: 'M152.525,339.529l6.787,0.834l2.265,3.216l1.189,0.477l10.239-1.904l0.594-1.787l2.023-1.07l4.884-4.05l4.285-0.594l3.93-2.501l7.74-4.286l0.832,1.428l5.716,1.904l8.334-4.285l2.618,1.787l-2.379,3.452l0.952,0.833h3.332l0.359,1.427l-2.857,5.121l0.833,0.834h1.666l8.336,2.265l3.691-3.099l5.478,4.289l1.667-2.026l1.43,1.431h1.784l0.834-1.431l-0.356-6.549l1.429-0.835l3.451-4.284l-0.594-16.549l-3.099-8.337l2.265-1.665l-6.548-12.027l-7.979-6.311l-2.26,1.43l0.238,3.692l-6.908,8.931l-11.428-2.384l-0.833-4.286l-7.146-5.716l-15.717-2.498l-6.787-1.188l-2.619-0.241l-5.952-4.883l-12.385-2.857l-8.57-16.551l-0.238-4.642l3.451-1.672v-5.117l2.502-6.311l-2.858-2.858l3.811-3.095l-2.383-1.425h-5.716l-10.238-4.644h-6.549l-5.118,1.43h-5.715l-8.931,4.879l-7.144-0.834l-7.146,2.5l-5.954-1.906l-3.688-3.212l-9.526-1.427l-6.192,4.28l-3.45-1.425l-2.859-2.263l-6.908-1.667l-1.065-1.189l-2.857-0.237l-9.782,5.945l-10.412-1.297l2.428,4.398l2.68,1.995l-0.821,3.842l-0.231,3.758l0.256,2.672l0,0l-0.193,3.208l3.451,3.454l0.239,4.884l-1.072,1.907l-5.119,0.591l-2.621-2.854l-2.619,0.355l-0.476,2.265l1.428,3.688l0.479,2.62v3.333l-0.833,2.381l0.354,1.909l3.336,0.356l1.785,3.094l7.739,6.071v1.906l5.716,6.311l1.902,2.262l1.79,0.595l3.451-3.451l3.096,2.856c0,0,15.395,13.684,13.098,11.193c-2.297-2.491,2.381,5.715,2.381,5.715h2.859l1.667-1.665l1.426,1.428v5.117l7.741,4.287l1.667-0.357l1.191,4.287l6.548,3.81l0.238,2.501l1.188,0.835l5.717-0.24h3.098l4.644,3.457l10.24-0.359l5.476-0.239l1.428,2.265l-1.188,4.883l1.427,1.664l5.715-4.761l7.146-5.239l5.12,0.95L152.525,339.529z',
        guangdong: 'M391.37,382.632l2.265-1.666v-3.45l1.188-1.072l2.859,0.235l4.879,2.264l0.834-1.667l-1.188-2.025l0.354-1.427l3.098-2.619l5.478,1.427l3.096-1.905l2.264,2.265l5.478-1.429l1.07,2.021l-1.666,2.264l-2.859,4.288v1.069l1.67,1.192l11.43-4.525l4.048,2.264l1.19-1.191l-1.19-2.499l0.28-1.663l7.459,1.663l1.431,1.072l2.022-0.24l3.094,3.929l3.451,7.502l-2.26,1.667l-2.023,3.689l-1.786,0.596l-1.664,3.455l-5.716,2.854l-2.266-1.188l-1.426,2.382v0.833h-1.787h-3.098l-2.857,2.023l-2.021-1.188l-2.5,1.663l-6.314,2.619l-5.121-4.05l-0.354,3.217l1.788,4.882l-4.646,1.904l-2.498,3.452l-4.887,1.191l-2.617,1.073h-5.119c0,0-0.869,2.545-3.453,3.452c-2.584,0.904-9.168,3.213-9.168,3.213l-4.522,3.098l-2.265,2.263l4.287,6.903l-2.856,2.501l-3.451-0.238l-4.053-7.381l0.954-5.238v-2.501l2.854-4.646l3.695-0.831l-0.355-2.501l3.809-1.785l0.476-4.288l6.668-5.119l-0.355-6.905l5.119-6.547l-0.24-2.5l1.666-2.381L391.37,382.632z',
        hongkong: 'M417.745,409.005l3.394,0.773l3.453-2.558l1.666,4.582c0,0-5.521,2.673-3.691,1.785c1.828-0.884-4.641-0.355-4.641-0.355l-0.834-3.454L417.745,409.005z',
        taiwan: 'M505.438,371.203l-3.217,19.169l-1.664,6.07v5.123l-1.43,1.427l-3.451-5.119l-3.693-2.858l-3.215-8.571c0,0-0.451-5.62,0.357-7.74c0.809-2.118,5.356-14.05,5.356-14.05l6.313-5.357l4.051,1.904L505.438,371.203z',
        macau: 'M412.032,413.183l-0.96,1.752c0,0,0.889,0.883,3.98,1.086s5.995-0.493,5.995-0.493L410.032,420.183z'
    },
    names: {
        heilongjiang: '黑龙江',
        jilin: '吉林',
        liaoning: '辽宁',
        hebei: '河北',
        shandong: '山东',
        jiangsu: '江苏',
        zhejiang: '浙江',
        anhui: '安徽',
        henan: '河南',
        shanxi: '山西',
        shaanxi: '陕西',
        gansu: '甘肃',
        hubei: '湖北',
        jiangxi: '江西',
        fujian: '福建',
        hunan: '湖南',
        guizhou: '贵州',
        sichuan: '四川',
        yunnan: '云南',
        qinghai: '青海',
        hainan: '海南',
        shanghai: '上海',
        chongqing: '重庆',
        tianjin: '天津',
        beijing: '北京',
        ningxia: '宁夏',
        neimongol: '内蒙古',
        guangxi: '广西',
        xinjiang: '新疆',
        xizang: '西藏',
        guangdong: '广东',
        hongkong: '香港',
        taiwan: '台湾',
        macau: '澳门'
    }
};