


const newTodo = document.querySelector('.new-todo');
const saveBtn = document.querySelector('.save-btn');


$( document ).ready(() => {
    $('.new-todo').submit(function(e) {
        e.preventDefault();
        let form = $(this);
        data = form.serialize();
        axios.post('/todos', data).then((res) => {

            console.log(res.data);
            // empty form fields
            const todos = document.getElementById('todos-container');
            $(todos).prepend(`<h2>${res.data.todos.item}</h2>`);

        }).catch((err) => {
            console.log(err);
        })
    })
})


function clearAllItems() {
    const todoContainer = document.getElementById('todos-container');
    todoContainer.innerHTML = '';
}


// saveBtn.addEventListener('click', (e) => {
//     // prevent page reload
//     e.preventDefault();
//
//     let data = e.serialize()
//     // let todoForm = new FormData(document.querySelector('.newTodo'));
//     // //serialize form data
//     //  let data = {};
//     //  for (let i of todoForm){
//     //      data[i[0]] = i[1];
//     //  }
//
//     console.log(JSON.stringify(data));
//     ///use axios to make post request
//     axios.post('/todos', data).then((res) => {
//         console.log(res.data);
//
//         // //reset form fields
//         // newTodo.reset();
//         //
//         // const todos = document.querySelector('todos-container');
//         // $(todos).prepend(`
//         //     <h2>${res.data.todos.item}</h2>`)
//
//
//     }).catch((err) => {
//         console.log(err);
//     })
//
// })
