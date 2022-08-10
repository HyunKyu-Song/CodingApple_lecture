var btn = $('.tab-button');
var ct = $('.tab-content');
var len = $('.tab-button').length;

// for(let i = 0; i < len; i++){
//   btn.eq(i).on('click', function(){
//     btn.removeClass('orange');
//     ct.removeClass('show');
//     btn.eq(i).addClass('orange');
//     ct.eq(i).addClass('show');
//   })
// }

for(let i = 0; i < len; i++){
  btn.eq(i).on('click', function(){
    loop(i);
  })
}

function loop(input){
  btn.removeClass('orange');
  ct.removeClass('show');
  btn.eq(input).addClass('orange');
  ct.eq(input).addClass('show');
}


// btn.eq(0).on('click', function(){
//   btn.removeClass('orange');
//   ct.removeClass('show');
//   btn.eq(0).addClass('orange');
//   ct.eq(0).addClass('show');
// })
// btn.eq(1).on('click', function(){
//   btn.removeClass('orange');
//   ct.removeClass('show');
//   btn.eq(1).addClass('orange');
//   ct.eq(1).addClass('show');
// })
// btn.eq(2).on('click', function(){
//   btn.removeClass('orange');
//   ct.removeClass('show');
//   btn.eq(2).addClass('orange');
//   ct.eq(2).addClass('show');
// })

