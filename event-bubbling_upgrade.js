var btn = $('.tab-button');
var ct = $('.tab-content');
var len = $('.tab-button').length;

$('.list').click(function(e){
  loop(e.target.dataset.id);
})

// $('.list').click(function(e){
//   for(let i = 0; i < len; i++){
//     if($(e.target).is(btn.eq(i))){
//       loop(i);
//     }
//   }
// })

function loop(input){
  btn.removeClass('orange');
  ct.removeClass('show');
  btn.eq(input).addClass('orange');
  ct.eq(input).addClass('show');
}

// for(let i = 0; i < len; i++){
//   btn.eq(i).on('click', function(){
//     loop(i);
//   })
// }

