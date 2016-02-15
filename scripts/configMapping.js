define([], function(undefined){
    var _mapping = {
        viewToData:{
            AFFILIATIONS:{control:'btnAffiliations',
                intDataIndex:'0', 
                data:'affiliations.xml', 
                tagsXml:['affiliations', 'affiliation'],
                tagsXmlChildsCommon:['affiliationName'],
                modelCid:'affiliationsId',
                templateId:'templateAffiliations'}   
        }
    };

    return{
        mapping:_mapping
    }

}); // End define([] ...




