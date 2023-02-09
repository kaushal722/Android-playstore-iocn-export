// Updated version of script by Todd Linkner
// This script is for Photoshop CS6. It outputs Android icons of the  
// xxxhdpi - ldpi from a source PSD at least 512px x 512px


/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>$$$/JavaScripts/OutputAndroidIcons/MenuAlt=Output Android Icons</name>
<category>mobile</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

// bring Photoshop into focus
#target photoshop

main();

function main() {

    var cleanup = confirm("This script outputs Android store, SHDPI, HDPI, "
                        + "MDPI, and LDPI icons from a source PSD at least 1024px x "
                        + "1024px\r\r"
                        + "Do you want to delete your original files when "
                        + "complete?");

    // Ask user for input folder
	var inputFile = File.openDialog("Select a PSD file at least 1024px x 1024px","PSD File:*.psd");
	if (inputFile == null) throw "No file selected. Exting script.";

    // Open file
	open(inputFile);
    var docRef = app.activeDocument;

	// Make output folders
	var icon1024 = Folder(app.activeDocument.path+"/icon");
	if(!icon1024.exists) icon1024.create();
    
    var icon512 = Folder(app.activeDocument.path+"/icon");
    if(!icon512.exists) icon512.create();
    
    var icon192 = Folder(app.activeDocument.path+"/icon");
	if(!icon192.exists) icon192.create();
  
	var icon96 = Folder(app.activeDocument.path+"/icon");
	if(!icon96.exists) icon96.create();
	
    var icon72 = Folder(app.activeDocument.path+"/icon");
	if(!icon72.exists) icon72.create();
	
    var icon48 = Folder(app.activeDocument.path+"/icon");
	if(!icon48.exists) icon48.create();
	
    var icon60 = Folder(app.activeDocument.path+"/icon");
	if(!icon60.exists) icon60.create();
    
    var icon76 = Folder(app.activeDocument.path+"/icon");
	if(!icon76.exists) icon76.create();

    var icon120 = Folder(app.activeDocument.path+"/icon");
	if(!icon120.exists) icon120.create();

    var icon180 = Folder(app.activeDocument.path+"/icon");
	if(!icon180.exists) icon180.create();

    var icon72x2 = Folder(app.activeDocument.path+"/icon");
	if(!icon72x2.exists) icon72x2.create();

    var icon144 = Folder(app.activeDocument.path+"/icon");
	if(!icon144.exists) icon144.create();

    var icon152 = Folder(app.activeDocument.path+"/icon");
	if(!icon152.exists) icon152.create();

    var icon167 = Folder(app.activeDocument.path+"/icon");
	if(!icon167.exists) icon167.create();

    var icon256 = Folder(app.activeDocument.path+"/icon");
	if(!icon256.exists) icon256.create();

    // Set ruler untis to pixels
    app.preferences.typeUnits = TypeUnits.PIXELS

	resize(0,icon1024,1024);
	resize(0,icon512,512);
	resize(0,icon192,192);
	resize(0,icon72x2,144);
	resize(144,icon144,144);

	resize(0,icon96,96);
	resize(0,icon72,72);
	resize(0,icon48,48);
	resize(0,icon60,60);
	resize(0,icon76,76);
	resize(0,icon152,152);

	resize(0,icon167,167);

	resize(0,icon120,120);
	resize(0,icon180,180);

	resize(1,icon256,256);
	


    // Clean up
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    // Delete the original
	// if (cleanup) inputFile.remove();

    alert("Done!");
}

function resize(fmt,dir,size) {
    // Setup file name
    // var fname = app.activeDocument.name.replace(/\s+/g, '').replace(/([a-z\d])([A-Z])/g, '$1$2').toLowerCase();
    var fname = app.activeDocument.name.toLowerCase();
    var opts, file, opts2, file2, opts3, file3;
    if(fmt === 0){
        if(size === 1024){
            fname = "iTunesArtwork@2x"+'.png';
        }else if(size === 512){
            fname = "icon-512" +'.png';
        }else if(size === 192){
            fname = "icon-192" +'.png';
        }else if(size === 96){
            fname = "icon-96" +'.png';
        }else if(size === 72){
            fname = "icon-72" +'.png';
        }else if(size === 48){
            fname = "icon-48" +'.png';
        }else if(size === 60){
            fname = "icon-60" +'.png';
        }else if(size === 76){
            fname = "icon-76" +'.png';
        }else if(size === 120){
            fname = "icon-60@2x" +'.png';
        }else if(size === 144){
            fname = "icon-72@2x" +'.png';
        }else if(size === 152){
            fname = "icon-76@2x" +'.png';
        }else if(size === 180){
            fname = "icon-60@3x" +'.png';
        }else if(size === 167){
            fname = "icon-167" +'.png';
        }else {
            fname = "icon" +'.png';
        } 
        
        
    
        // Set export options
        
        opts = new ExportOptionsSaveForWeb();
        opts.format = SaveDocumentType.PNG;
        opts.PNG8 = false; 
        opts.transparency = true;
        opts.interlaced = 0;
        opts.includeProfile = false;
        opts.optimized = true;
        
        // Duplicate, resize and export
        var tempfile = app.activeDocument.duplicate();
        tempfile.resizeImage(size+"px",size+"px");
        file = new File(dir+"/"+fname);
        tempfile.exportDocument(file, ExportType.SAVEFORWEB, opts);
        tempfile.close(SaveOptions.DONOTSAVECHANGES);
    } else if(fmt === 1) {
        if(size === 256){
            fname = "bookname"+'.jpg';
        }
        
        opts2 = new ExportOptionsSaveForWeb();
        opts2.format = SaveDocumentType.JPEG;
        // opts.PNG8 = false; 
        // opts.transparency = true;
        // opts.interlaced = 0;
        // opts.includeProfile = false;
        opts2.optimized = true;
        
        // Duplicate, resize and export
        var tempfile = app.activeDocument.duplicate();
        tempfile.resizeImage(size+"px",size+"px");
        file2 = new File(dir+"/"+fname);
        tempfile.exportDocument(file2, ExportType.SAVEFORWEB, opts2);
        tempfile.close(SaveOptions.DONOTSAVECHANGES);
    }else if(fmt === 144) { //this is the case of 2nd 114pm img
        
            fname = "icon-144"+'.png';
        
        
        opts3 = new ExportOptionsSaveForWeb();
        opts3.format = SaveDocumentType.JPEG;
        opts3.PNG8 = false; 
        opts3.transparency = true;
        opts3.interlaced = 0;
        opts3.includeProfile = false;
        opts3.optimized = true;
        
        // Duplicate, resize and export
        var tempfile = app.activeDocument.duplicate();
        tempfile.resizeImage(size+"px",size+"px");
        file3 = new File(dir+"/"+fname);
        tempfile.exportDocument(file3, ExportType.SAVEFORWEB, opts3);
        tempfile.close(SaveOptions.DONOTSAVECHANGES);
    }
}