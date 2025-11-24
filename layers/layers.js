var wms_layers = [];


        var lyr_Satelite_0 = new ol.layer.Tile({
            'title': 'Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CapaQuintero_1 = new ol.format.GeoJSON();
var features_CapaQuintero_1 = format_CapaQuintero_1.readFeatures(json_CapaQuintero_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapaQuintero_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapaQuintero_1.addFeatures(features_CapaQuintero_1);
var lyr_CapaQuintero_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapaQuintero_1, 
                style: style_CapaQuintero_1,
                popuplayertitle: 'Capa Quintero',
                interactive: false,
                title: '<img src="styles/legend/CapaQuintero_1.png" /> Capa Quintero'
            });
var format_CapaPuchuncav_2 = new ol.format.GeoJSON();
var features_CapaPuchuncav_2 = format_CapaPuchuncav_2.readFeatures(json_CapaPuchuncav_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapaPuchuncav_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapaPuchuncav_2.addFeatures(features_CapaPuchuncav_2);
var lyr_CapaPuchuncav_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapaPuchuncav_2, 
                style: style_CapaPuchuncav_2,
                popuplayertitle: 'Capa Puchuncaví',
                interactive: false,
                title: '<img src="styles/legend/CapaPuchuncav_2.png" /> Capa Puchuncaví'
            });
var format_Analisismuestras_3 = new ol.format.GeoJSON();
var features_Analisismuestras_3 = format_Analisismuestras_3.readFeatures(json_Analisismuestras_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Analisismuestras_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Analisismuestras_3.addFeatures(features_Analisismuestras_3);
var lyr_Analisismuestras_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Analisismuestras_3, 
                style: style_Analisismuestras_3,
                popuplayertitle: 'Analisis muestras',
                interactive: true,
                title: '<img src="styles/legend/Analisismuestras_3.png" /> Analisis muestras'
            });

lyr_Satelite_0.setVisible(true);lyr_CapaQuintero_1.setVisible(true);lyr_CapaPuchuncav_2.setVisible(true);lyr_Analisismuestras_3.setVisible(true);
var layersList = [lyr_Satelite_0,lyr_CapaQuintero_1,lyr_CapaPuchuncav_2,lyr_Analisismuestras_3];
lyr_CapaQuintero_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_CapaPuchuncav_2.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Analisismuestras_3.set('fieldAliases', {'id': 'id', 'Muestra': 'Muestra', 'T_Muestra': 'T_Muestra', 'Ubicacion': 'Ubicacion', 'Cu': 'Cu', 'Cd': 'Cd', 'Pb': 'Pb', });
lyr_CapaQuintero_1.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_CapaPuchuncav_2.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_Analisismuestras_3.set('fieldImages', {'id': 'TextEdit', 'Muestra': 'TextEdit', 'T_Muestra': 'TextEdit', 'Ubicacion': 'TextEdit', 'Cu': 'TextEdit', 'Cd': 'TextEdit', 'Pb': 'TextEdit', });
lyr_CapaQuintero_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_CapaPuchuncav_2.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Analisismuestras_3.set('fieldLabels', {'id': 'hidden field', 'Muestra': 'inline label - visible with data', 'T_Muestra': 'inline label - visible with data', 'Ubicacion': 'inline label - visible with data', 'Cu': 'inline label - visible with data', 'Cd': 'inline label - visible with data', 'Pb': 'inline label - visible with data', });
lyr_Analisismuestras_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});