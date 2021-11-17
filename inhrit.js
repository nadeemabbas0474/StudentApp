class teacher{
    constructor(props){
        this.myName = props.name;
        this.myAge = props.age;
    }
    getAbout(){
         return `me ${this.myName} my age is ${this.myAge}`
    }
  }
  class student extends teacher{
      constructor(props, para){
        super(props)
        this.myPara = para;
      }
      getDetails(){
          return `${super.getAbout()} hi ${this.myPara}`
      }
  }
  const bsCls = new teacher({name:"nadeeem", age:23});
  console.log(bsCls.getAbout())

  const std = new student({name:"nadeeem", age:23},"dsha")
  console.log(std.getDetails())


// Base class
  class building{
      constructor(paramenters){
          this.myNm = paramenters.name;
          this.Myag = paramenters.age;
        }
        buildInfo(){
            return `This building name is ${this.myNm} and its aga is ${this.Myag}`
        }
  }
// inherited Class
class room extends building{
    constructor(paramenters, area){
        super(paramenters)
        this.buildWidth = area.width;
        this.buildHeight = area.height;
        this.buildLocation = area.location;
    }
    roomInfo(){
        return `${super.buildInfo()}The room area is ${this.buildWidth * this.buildHeight}FT The location is ${this.buildLocation}}`
    }
}
const build = new building({name:"Nadeem_House", age:"20 years old building"})
console.log(build.buildInfo())
const rom = new room({name:"Nadeem_House", age:"20 years old building "},{width:23,height:43,location:"danyore"},)
console.log(rom.roomInfo())


