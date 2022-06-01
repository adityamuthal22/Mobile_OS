var lower="abcdefghijklmnopqrstuvwxyz";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var arr = ["MA", "SA", "I", "SCH", "OOL"];
var arr1=[];

var output="";
function convert(char)
{
  for(var i=0; i<char.length; i++)
  {
    for(var j=0; j<lower.length; j++)
    {
      if(char[i]== upper[j])
      {
        output = output + lower[i];
      }
    }
  }
  return output;
}

var final = "";
for(var k=0; k<arr.length; k++)
{
  console.log(arr[k]);
  final = convert(arr[k]);
  arr1.push(final);
  final="";
}
console.log(arr1);