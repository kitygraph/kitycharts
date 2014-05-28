/* global require: true */
/* global console: true */
/* jslint evil: true */

var dependience = [

    'src/kitycharts.js',

    'src/util/align.js',
    'src/util/parallel.js',
    'src/util/Query.js',
    'src/util/Ruler.js',
    'src/util/sharpen.js',
    'src/util/tools.js',

    'src/base/ChartEvent.js',
    'src/base/EventHandler.js',
    'src/base/Data.js',
    'src/base/ChartElement.js',
    'src/base/AnimatedChartElement.js',
    'src/base/Chart.js',

    'src/shapex/Arrow.js',
    'src/shapex/Pie.js',
    'src/shapex/RegularPolygon.js',
    'src/shapex/Star.js',

    'src/component/Line.js',
    'src/component/Polyline.js',
    'src/component/ConnectLine.js',
    'src/component/Bezier.js',
    'src/component/Label.js',
    'src/component/Bar.js',
    'src/component/Coordinate.js',
    'src/component/XYCoordinate.js',
    'src/component/CategoryCoordinate.js',
    'src/component/PolarCoordinate.js',
    'src/component/ElementList.js',
    'src/component/Legend.js',
    'src/component/Tooltip.js',
    'src/component/PieDot.js',
    'src/component/Pie.js',
    'src/component/CircleDot.js',
    'src/component/ConnectCircleDot.js',
    'src/component/Mesh.js',
    'src/component/Categories.js',
    'src/component/Marquee.js',
    'src/component/Map.js',
    'src/component/Rectage.js',

    'src/config/chart.js',
    'src/config/bar.js',
    'src/config/column.js',
    'src/config/line.js',
    'src/config/area.js',
    'src/config/ChartsConfig.js',

    'src/formatter/chartData.js',
    'src/formatter/pieData.js',
    'src/formatter/TreemapData.js',

    'src/plots/LinearPlots.js',
    'src/plots/LinePlots.js',
    'src/plots/AreaPlots.js',
    'src/plots/PiePlots.js',
    'src/plots/StickPlots.js',

    'src/charts/ScatterChart.js',
    'src/charts/ForceChart.js',
    'src/charts/KityCharts.js',
    'src/charts/ChinaMapChart.js',
    'src/charts/BaseCharts.js',
    'src/charts/PieCharts.js',
    'src/charts/Treemap.js',
    'src/charts/KityCharts.js'
];

function nodeBuild() {

    var fs = require( 'fs' );

    var buildPath = [ 'dist/kitychart.all.js' ];

    var contents = [],
        content, fileName;

    while ( dependience.length ) {
        try {
            contents.push( fs.readFileSync( fileName = dependience.shift() ) );
        } catch ( e ) {
            console.log( 'Missing module:' + fileName );
        }
    }

    content = contents.join( '\n\n' );

    content = '(function(kity, window) {\n\n' + content + '\n\n})(kity, window);';

    buildPath.forEach( function ( path ) {
        fs.writeFileSync( path, content );
    } );

    console.log( ' > KityCharts build success!' );
}

function devWrite() {
    function getBasePath() {
        var scripts = document.getElementsByTagName( 'script' ),
            i, match, pattern;
        pattern = /(.+\/)build\.js/;
        for ( i = 0; i < scripts.length; i++ ) {
            match = pattern.exec( scripts[ i ].src );
            if ( match ) return match[ 1 ];
        }
    }
    var basePath = getBasePath();
    while ( dependience.length ) {
        document.write( '<script src="' + basePath + dependience.shift() + '?_=' + +new Date() + '"></script>' );
    }
}

var env = !( 'window' in this ) ? 'node' : 'script';

var task = {
    'node': nodeBuild,
    'script': devWrite
};

task[ env ].call();