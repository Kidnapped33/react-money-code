//函数封装法

let id = 0;
const createId = () => {
    id += 1;
    return id;
};

export {createId};

//class 封装法

// let id = 0
// class Id {
//     value:number;
//     constructor(props) {
//         super(props);
//         let id +=1
//         this.value = id
//     }
// }
// export {Id};

//使用 （new Id）.value