// Телефонная книга
var phoneBook = new Object;

function addContact(name, phones){
    if(!phoneBook.hasOwnProperty(name)){
        phoneBook[name]=[];
    }

    var updatePhones = phoneBook[name].concat(phones);
    phoneBook[name]=updatePhones;
}

function removeAtContact(name,index){
    phoneBook[name].splice(index,1);

    if(phoneBook[name].length===0){
        delete phoneBook[name];
    }
}

function removePhone(phone){
    var allContacts = Object.keys(phoneBook);

    for(var i=0; i<allContacts.length;i++){
        var contact = allContacts[i];

        var indexPhone = phoneBook[contact].indexOf(phone);
        if(indexPhone !== -1){
            removeAtContact(contact, indexPhone);
            return true;
        }
    }
    return false;
}

function showAllContacts(){
    var contacts = Object.keys(phoneBook);

    contacts.sort();

    return contacts.map(function(name){
        var phones = phoneBook[name];

        return name + ": " + phones.join(', ');
    });

}
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandWords = command.split(' ');
    var commandName = commandWords[0];

    if(commandName==='ADD'){
        var contactName = commandWords[1];
        var contactPhones = commandWords[2].split(',');
        return addContact(contactName,contactPhones);
    }

    if(commandName==='REMOVE_PHONE'){
        var phoneDelete = commandWords[1];
        return removePhone(phoneDelete)
    }

    if(commandName==='SHOW'){
        return showAllContacts();
    }
    

}
