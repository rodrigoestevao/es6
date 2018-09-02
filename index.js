class Message {
    constructor(text = '', created = Date.now()) {
        this.text = text;
        this.created = created;
    }

    get created() {
        return this._created;
    }

    set created(created) {
        if (!created || isNaN(created)) {
            throw new Error('Invalid created');
        }
        this._created = created;
    }

    toString() {
        // The use of "`" to represent strings allows us the use of string interpolation
        return `Message created at: ${this.created} - Text: ${this.text}`;
    }
}

class ImageMessage extends Message {
    constructor(text = '', created = Date.now(), url = '', thumbnail = '') {
        super(text, created);
        this.url = url;
        this.thumbnail = thumbnail;
    }

    toString(){
        return `Photo${super.toString()} - URL: ${this.url} Thumbnail: ${this.thumbnail}`;
    }
}

var text = 'Some text';
var created = Date.now();

// var duckTypeMessage = {
//     text: text,
//     created: created
// }

// When the variable initializing the object and the property has the same name, it can be omitted
var duckTypeMessage = {
    text,
    created
};

var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var photoMessage = new ImageMessage();

// The following are some of ways to cast the object to string

console.log(emptyMessage + '');
console.log(textMessage + '');
console.log(photoMessage + '');

console.log(`${emptyMessage}`);
console.log(`${textMessage}`);
console.log(`${photoMessage}`);

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

// Testing the instance of each object

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(duckTypeMessage);