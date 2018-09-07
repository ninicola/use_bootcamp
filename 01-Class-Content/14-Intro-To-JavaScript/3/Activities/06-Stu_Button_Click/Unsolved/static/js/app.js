// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);

// Select the upvote and downvote buttons
var upb=d3.select('.upvote');
var dob=d3.select('.downvote');
// Select the counter h1 element
var counter=d3.select('.counter');
// Use D3 `.on` to attach a click handler for the upvote
function handlerup(event){
  var upadd=parseInt(counter.text())+1;
 counter.text(upadd+1);
}
// Use d3 `.on` to attach a click handler for the downvote
upb.on('click',function(){
  var upadd=parseInt(counter.text());
  counter.text(upadd+1);
});
dob.on('click',function(){
  var downsub=parseInt(counter.text());
  counter.text(downsub-1);
})