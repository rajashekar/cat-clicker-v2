var initialCats = [
    {
        clickCount: 0,
        name: 'cat1',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        nickNames: ['cute','nice','amazing','tiger']
    },
    {
        clickCount: 0,
        name: 'cat2',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        nickNames: ['abc']
    },
    {
        clickCount: 0,
        name: 'cat3',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        nickNames: ['pqr']
    },
    {
        clickCount: 0,
        name: 'cat4',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        nickNames: ['xzy']
    },
    {
        clickCount: 0,
        name: 'cat5',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        nickNames: ['mno']
    },
]
var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name)
    this.imgSrc = ko.observable(data.imgSrc);
    this.level = ko.computed(function(){
        if(this.clickCount() <= 5) {
            return "begginer";
        } else {
            return "pro";
        }
    },this);
    this.nickNames = ko.observableArray(data.nickNames);
}
var ViewModel = function() {
    var self = this;
    this.catList = ko.observableArray([])
    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    })
    this.currentCat = ko.observable(this.catList()[0]);
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
    this.setCurrentCat = function(cat) {
        self.currentCat(cat)
    };
}

ko.applyBindings(new ViewModel());
