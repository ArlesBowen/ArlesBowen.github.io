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
                interactive: true,
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
                interactive: true,
                title: '<img src="styles/legend/CapaPuchuncav_2.png" /> Capa Puchuncaví'
            });
var format_Humedales_Urbanos_Declarados_3 = new ol.format.GeoJSON();
var features_Humedales_Urbanos_Declarados_3 = format_Humedales_Urbanos_Declarados_3.readFeatures(json_Humedales_Urbanos_Declarados_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humedales_Urbanos_Declarados_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Humedales_Urbanos_Declarados_3.addFeatures(features_Humedales_Urbanos_Declarados_3);
var lyr_Humedales_Urbanos_Declarados_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Humedales_Urbanos_Declarados_3, 
                style: style_Humedales_Urbanos_Declarados_3,
                popuplayertitle: 'Humedales_Urbanos_Declarados',
                interactive: true,
                title: '<img src="styles/legend/Humedales_Urbanos_Declarados_3.png" /> Humedales_Urbanos_Declarados'
            });
var format_localidadespuchuncavdatos_4 = new ol.format.GeoJSON();
var features_localidadespuchuncavdatos_4 = format_localidadespuchuncavdatos_4.readFeatures(json_localidadespuchuncavdatos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localidadespuchuncavdatos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localidadespuchuncavdatos_4.addFeatures(features_localidadespuchuncavdatos_4);
var lyr_localidadespuchuncavdatos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localidadespuchuncavdatos_4, 
                style: style_localidadespuchuncavdatos_4,
                popuplayertitle: 'localidades puchuncaví datos',
                interactive: true,
                title: '<img src="styles/legend/localidadespuchuncavdatos_4.png" /> localidades puchuncaví datos'
            });
var format_humedalescolaborativosdatos_5 = new ol.format.GeoJSON();
var features_humedalescolaborativosdatos_5 = format_humedalescolaborativosdatos_5.readFeatures(json_humedalescolaborativosdatos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_humedalescolaborativosdatos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_humedalescolaborativosdatos_5.addFeatures(features_humedalescolaborativosdatos_5);
var lyr_humedalescolaborativosdatos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_humedalescolaborativosdatos_5, 
                style: style_humedalescolaborativosdatos_5,
                popuplayertitle: 'humedales colaborativos datos',
                interactive: true,
                title: '<img src="styles/legend/humedalescolaborativosdatos_5.png" /> humedales colaborativos datos'
            });
var format_microbasuralesdatos_6 = new ol.format.GeoJSON();
var features_microbasuralesdatos_6 = format_microbasuralesdatos_6.readFeatures(json_microbasuralesdatos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_microbasuralesdatos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_microbasuralesdatos_6.addFeatures(features_microbasuralesdatos_6);
var lyr_microbasuralesdatos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_microbasuralesdatos_6, 
                style: style_microbasuralesdatos_6,
                popuplayertitle: 'microbasurales datos',
                interactive: true,
                title: '<img src="styles/legend/microbasuralesdatos_6.png" /> microbasurales datos'
            });
var format_microbasuralesdatos_7 = new ol.format.GeoJSON();
var features_microbasuralesdatos_7 = format_microbasuralesdatos_7.readFeatures(json_microbasuralesdatos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_microbasuralesdatos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_microbasuralesdatos_7.addFeatures(features_microbasuralesdatos_7);
var lyr_microbasuralesdatos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_microbasuralesdatos_7, 
                style: style_microbasuralesdatos_7,
                popuplayertitle: 'microbasurales datos',
                interactive: true,
                title: '<img src="styles/legend/microbasuralesdatos_7.png" /> microbasurales datos'
            });
var format_puntospasivosambientales_8 = new ol.format.GeoJSON();
var features_puntospasivosambientales_8 = format_puntospasivosambientales_8.readFeatures(json_puntospasivosambientales_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntospasivosambientales_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntospasivosambientales_8.addFeatures(features_puntospasivosambientales_8);
var lyr_puntospasivosambientales_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntospasivosambientales_8, 
                style: style_puntospasivosambientales_8,
                popuplayertitle: 'puntos pasivos ambientales',
                interactive: true,
                title: '<img src="styles/legend/puntospasivosambientales_8.png" /> puntos pasivos ambientales'
            });

lyr_Satelite_0.setVisible(true);lyr_CapaQuintero_1.setVisible(true);lyr_CapaPuchuncav_2.setVisible(true);lyr_Humedales_Urbanos_Declarados_3.setVisible(true);lyr_localidadespuchuncavdatos_4.setVisible(true);lyr_humedalescolaborativosdatos_5.setVisible(true);lyr_microbasuralesdatos_6.setVisible(true);lyr_microbasuralesdatos_7.setVisible(true);lyr_puntospasivosambientales_8.setVisible(true);
var layersList = [lyr_Satelite_0,lyr_CapaQuintero_1,lyr_CapaPuchuncav_2,lyr_Humedales_Urbanos_Declarados_3,lyr_localidadespuchuncavdatos_4,lyr_humedalescolaborativosdatos_5,lyr_microbasuralesdatos_6,lyr_microbasuralesdatos_7,lyr_puntospasivosambientales_8];
lyr_CapaQuintero_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_CapaPuchuncav_2.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Humedales_Urbanos_Declarados_3.set('fieldAliases', {'COD_HUM_M': 'COD_HUM_M', 'COMUNA': 'COMUNA', 'PROVINCIA': 'PROVINCIA', 'REGION': 'REGION', 'HECTAREAS': 'HECTAREAS', 'PROCESO': 'PROCESO', 'RESOLUCION': 'RESOLUCION', 'URL_RES_BC': 'URL_RES_BC', 'GlobalID': 'GlobalID', 'NOMBRE': 'NOMBRE', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_localidadespuchuncavdatos_4.set('fieldAliases', {'Localidade': 'Localidade', 'X': 'X', 'Y': 'Y', });
lyr_humedalescolaborativosdatos_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'EASTING X': 'EASTING X', 'NORTHING Y': 'NORTHING Y', });
lyr_microbasuralesdatos_6.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_microbasuralesdatos_7.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_puntospasivosambientales_8.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'EASTING X': 'EASTING X', 'NORTHING Y': 'NORTHING Y', });
lyr_CapaQuintero_1.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_CapaPuchuncav_2.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_Humedales_Urbanos_Declarados_3.set('fieldImages', {'COD_HUM_M': '', 'COMUNA': '', 'PROVINCIA': '', 'REGION': '', 'HECTAREAS': '', 'PROCESO': '', 'RESOLUCION': '', 'URL_RES_BC': '', 'GlobalID': '', 'NOMBRE': '', 'Shape_STAr': '', 'Shape_STLe': '', });
lyr_localidadespuchuncavdatos_4.set('fieldImages', {'Localidade': '', 'X': '', 'Y': '', });
lyr_humedalescolaborativosdatos_5.set('fieldImages', {'NOMBRE': '', 'EASTING X': '', 'NORTHING Y': '', });
lyr_microbasuralesdatos_6.set('fieldImages', {'field_1': '', 'field_2': '', 'field_3': '', });
lyr_microbasuralesdatos_7.set('fieldImages', {'field_1': '', 'field_2': '', 'field_3': '', });
lyr_puntospasivosambientales_8.set('fieldImages', {'NOMBRE': '', 'EASTING X': '', 'NORTHING Y': '', });
lyr_CapaQuintero_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_CapaPuchuncav_2.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Humedales_Urbanos_Declarados_3.set('fieldLabels', {'COD_HUM_M': 'no label', 'COMUNA': 'no label', 'PROVINCIA': 'no label', 'REGION': 'no label', 'HECTAREAS': 'no label', 'PROCESO': 'no label', 'RESOLUCION': 'no label', 'URL_RES_BC': 'no label', 'GlobalID': 'no label', 'NOMBRE': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_localidadespuchuncavdatos_4.set('fieldLabels', {'Localidade': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_humedalescolaborativosdatos_5.set('fieldLabels', {'NOMBRE': 'no label', 'EASTING X': 'no label', 'NORTHING Y': 'no label', });
lyr_microbasuralesdatos_6.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr_microbasuralesdatos_7.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr_puntospasivosambientales_8.set('fieldLabels', {'NOMBRE': 'no label', 'EASTING X': 'no label', 'NORTHING Y': 'no label', });
lyr_puntospasivosambientales_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});