function setID() {

var entries=lib().entries();
var fieldNames = lib().fields();


if (fieldNames.indexOf("ID") !== -1) {

  for (var i = 0; i < entries.length; i++) {
     entries[i].set("ID", i);
    } 
  } else {
    message("Field 'ID' does NOT exist");
  }
}