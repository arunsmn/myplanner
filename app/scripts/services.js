 
        app.factory ('Model', function () {
            var expenseItem;
            var expenseTotal = 0;
            var data = [];
            return {
                notes:function () {
                    return data;
                },
                // expenseList:function (id) {
                //     return a[id].expenseItem;
                // },
                get:function(id){
                    var dat = localStorage.getItem('data')? JSON.parse(localStorage.getItem('data')) : data;
                    return dat[id];
                },
                add:function (note) {
                    data = localStorage.getItem('data')? JSON.parse(localStorage.getItem('data')) : data;
                    var currentIndex = data.length;
                    data.push({
                        id:currentIndex, name:note.name, amount:note.amount, expenseItem:[], expenseTotal:0
                    });
                    localStorage.setItem('data', JSON.stringify(data));
                },
                delete:function (id) {
                    data = localStorage.getItem('data')? JSON.parse(localStorage.getItem('data')) : data;
                    data.splice(id,1);
                    localStorage.setItem('data', JSON.stringify(data));
                },
                itemAdd:function (id, note, eTotal) {
                    var data_new = localStorage.getItem('data')? JSON.parse(localStorage.getItem('data')) : data;
                    var currentIndex = data_new[id].expenseItem.length;
                    data_new[id].expenseItem.push({
                        id:currentIndex, expenseName:note.expenseName, expenseAmount:note.expenseAmount
                    });
                    data_new[id].expenseTotal = eTotal;
                    localStorage.setItem('data', JSON.stringify(data_new));
                },
                itemDelete:function (id,pid,eTotal) {
                    var data = localStorage.getItem('data')? JSON.parse(localStorage.getItem('data')) : data;
                    console.log(pid);
                    var myArray = data[pid].expenseItem;
                    for(var i = 0; i < myArray.length; i++) {
                        if(myArray[i].id == id) {
                            myArray.splice(i, 1);
                            break;
                        } 
                    }
                    console.log(myArray.length);
                    for(var i = 0; i < myArray.length; i++) {
                        myArray[i].id= i;
                    }
                    data[pid].expenseTotal = eTotal;
                    localStorage.setItem('data', JSON.stringify(data));
                    console.log(localStorage.getItem('data'));
                    console.log("^--data after delete");
                }
            }
        });
