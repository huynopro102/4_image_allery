// cho khi click vào sẽ opacity lên 1 
var close_model = document.querySelector('.close_model')
var arrow_left = document.querySelector('.control_left')
var arrow_right = document.querySelector('.control_right')
var wrapper_image = document.querySelectorAll('.wrapper .image img')
var gallery = document.querySelector('.gallery')
var gallery_inner_image = document.querySelector('.gallery_inner img')
// wrapper_image value return this NodeList giống với Array nên phải dùng hàm forEach hoặc dùng các hàm khác
var current_image = 0 
function showGallery(){
    // ham hien thi khi click , luu y var current_image
    // arrow left
    if(current_image == 0 ){
        arrow_left.classList.add('hide')
    }
   else{
    arrow_left.classList.remove('hide')
   }
   // arrow right
   if(current_image === wrapper_image.length -1 ){
    arrow_right.classList.add('hide')
    }
    else{   
    arrow_right.classList.remove('hide')
    }
    gallery.classList.add('show')
    gallery_inner_image.src = wrapper_image[current_image].src
}
//
console.log(wrapper_image)
wrapper_image.forEach( function(items,index){
    items.onclick = function(){
       current_image = index
    showGallery()
   } 
 }) 
// close_model
close_model.onclick = function(events){
    gallery.classList.toggle('show')
}

// click vào arrow right thì nó di chuyển sang tăng thêm 1 , nếu đế hình ở vị trí 0 thì không thể arrow left sẽ được ẩn đi , tương tự arrow right
// arrow left
arrow_left.onclick = function(events){
    if(current_image > 0){
        current_image--
        showGallery()
    }
}
// arrow right 
arrow_right.onclick = function(events){
    if(current_image < wrapper_image.length -1){
        current_image++
        showGallery()
    }
}

