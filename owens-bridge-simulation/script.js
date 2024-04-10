var div1 = document.getElementById("diagram");
var div2 = document.getElementById("toolbox");
function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    } [event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}
init();

const r_pos = [];
let r_top, r_left, c_top2, c_left2, c_top4, c_left4, L_top1, L_left1, v_left, v_right;
const mydiv = document.getElementById('mydiv');

var data4 = 100, data3 = 10, data_c2, data_c4, data_r1 = 1000, data_r3 = 100, data_L =(Math.max(Math.floor((Math.random()*3) +1),1))*0.001, data_r2 = 10;
var range = document.querySelector('#rangeInput');
  var field = document.querySelector('#numberInput');
  var e;
  var data5,data6;
  range.addEventListener('input', function (e) {
    field.value = e.target.value;
    data_r3=document.getElementById("r_3").value;
   data_c2 = document.getElementById("c_2").value;
   data_r2=field.value;
   data5=document.getElementById('data5').value;
   data6=document.getElementById('data6').value;
   if(data5!=""&& data6!=''&& div1.classList.contains('no-pointer-events'))
   { 
     data_c2 = parseFloat(data_c2);// used for converting int to flaot
    data_r2 = parseFloat(data_r2);
     var val_l = data_r3 * data_c2 * data_r2;    
     var mx=Math.max(val_l,data_L);
     var mn=Math.min(val_l,data_L);
    var  i=(mx-mn)/mx;

     i=i*data5*5.0;
      i/=15;
      i=i.toFixed(3);
      var l_min, l_max;
      l_min = 0.98 * data_L;
    l_max = 1.02 * data_L;
if (i<=l_max&& i>=l_min)
i=0;
     document.getElementById('digi').innerHTML=`${i} mV`;
      }
  });
  
  field.addEventListener('input', function (e) {
    range.value = e.target.value;
    data_r3=document.getElementById("r_3").value;
   data_c2 = document.getElementById("c_2").value;
   data_r2=range.value;
   data5=document.getElementById('data5').value;
   data6=document.getElementById('data6').value;
   if(data5!=""&& data6!=''&& div1.classList.contains('no-pointer-events'))
   { 
     data_c2 = parseFloat(data_c2);// used for converting int to flaot
    data_r2 = parseFloat(data_r2);
     var val_l = data_r3 * data_c2 * data_r2;
     var mx=Math.max(val_l,data_L);
     var mn=Math.min(val_l,data_L);
    var  i=(mx-mn)/mx;

     i=i*data5*5.0;
      i/=15;
      i=i.toFixed(3);
      var l_min, l_max;
      l_min = 0.98 * data_L;
      l_max = 1.02 * data_L;
if (i<=l_max&& i>=l_min)
i=0;
     document.getElementById('digi').innerHTML=`${i} mV`;
        }

  });
  document.getElementById('r_3').addEventListener('input',function(e){
    data_r3=e.target.value;
    data_r3=document.getElementById("r_3").value;
   data_c2 = document.getElementById("c_2").value;
   data_r2=range.value;
   data5=document.getElementById('data5').value;
   data6=document.getElementById('data6').value;
   if(data5!=""&& data6!=''&& div1.classList.contains('no-pointer-events'))
   { 
     data_c2 = parseFloat(data_c2);// used for converting int to flaot
    data_r2 = parseFloat(data_r2);
     var val_l = data_r3 * data_c2 * data_r2;
     var mx=Math.max(val_l,data_L);
     var mn=Math.min(val_l,data_L);
    var  i=(mx-mn)/mx;

     i=i*data5*5.0;
      i/=15;
      i=i.toFixed(3);
      var l_min, l_max;
      l_min = 0.98 * data_L;
    l_max = 1.02 * data_L;
if (i<=l_max&& i>=l_min)
i=0;
             
             document.getElementById('digi').innerHTML=`${i} mV`;
        }
  });
  document.getElementById('c_2').addEventListener('input',function(e){
    
    data_c2=e.target.value;
    data_r3=document.getElementById("r_3").value;
   data_c2 = document.getElementById("c_2").value;
   data_r2=range.value;
   //console.log(data5," ",data6);
   data5=document.getElementById('data5').value;
   data6=document.getElementById('data6').value;
   if(data5!=""&& data6!=''&& div1.classList.contains('no-pointer-events'))
   { 
     data_c2 = parseFloat(data_c2);// used for converting int to flaot
    data_r2 = parseFloat(data_r2);
     var val_l = data_r3 * data_c2 * data_r2;
     var mx=Math.max(val_l,data_L);
     var mn=Math.min(val_l,data_L);
    var  i=(mx-mn)/mx;

     i=i*data5*5.0;
      i/=15;
      i=i.toFixed(3);
      var l_min, l_max;
      l_min = 0.98 * data_L;
    l_max = 1.02 * data_L;
if (i<=l_max&& i>=l_min)
i=0;
             
             document.getElementById('digi').innerHTML=`${i} mV`;
   }
   
  });
  document.getElementById('data5').addEventListener('input',function(e){
    
    data_c2=e.target.value;
    data_r3=document.getElementById("r_3").value;
   data_c2 = document.getElementById("c_2").value;
   data_r2=range.value;
   //console.log(data5," ",data6);
   data5=document.getElementById('data5').value;
   data6=document.getElementById('data6').value;
   if(data5!=""&& data6!=''&& div1.classList.contains('no-pointer-events'))
   { 
     data_c2 = parseFloat(data_c2);// used for converting int to flaot
    data_r2 = parseFloat(data_r2);
     var val_l = data_r3 * data_c2 * data_r2;
     var mx=Math.max(val_l,data_L);
     var mn=Math.min(val_l,data_L);
   var  i=(mx-mn)/mx;

     i=i*data5*5.0;
      i/=15;
      i=i.toFixed(3);
      var l_min, l_max;
      l_min = 0.98 * data_L;
    l_max = 1.02 * data_L;
if (i<=l_max&& i>=l_min)
i=0;
             
             document.getElementById('digi').innerHTML=`${i} mV`;
       
   }
   
  });
  document.getElementById('data6').addEventListener('input',function(e){
    
    data_c2=e.target.value;
    data_r3=document.getElementById("r_3").value;
   data_c2 = document.getElementById("c_2").value;
   data_r2=range.value;
   //console.log(data5," ",data6);
   data5=document.getElementById('data5').value;
   data6=document.getElementById('data6').value;
   if(data5!=""&& data6!=''&& div1.classList.contains('no-pointer-events'))
   { 
     data_c2 = parseFloat(data_c2);// used for converting int to flaot
    data_r2 = parseFloat(data_r2);
     var val_l = data_r3 * data_c2 * data_r2;
     var mx=Math.max(val_l,data_L);
     var mn=Math.min(val_l,data_L);
    var i=(mx-mn)/mx;

      i=i*data5*5.0;
      i/=15;
i=i.toFixed(3);
var l_min, l_max;
    l_min = 0.98 * data_L;
    l_max = 1.02 * data_L;
if (i<=l_max&& i>=l_min)
i=0;
     
     document.getElementById('digi').innerHTML=`${i} mV`;
   }
   
  });
  console.log(range.value);
  console.log(field.value);
  //data_r2 = output.innerHTML;
//document.getElementById('digi').innerHTML=`${range.value} mV`;


  //var L1=val_l,C2=data_c2,R2=(data_r2),R1=parseInt(data_r1),f=parseInt(data6),R3=parseInt(data_r3),data_r2;
  //  var i=(((L1/C2))-R2*R3)**2+((R3/(2*Math.PI*f*C2))-(R1/(2*Math.PI*f*C2))**2);

  
   // console.log(R1,L1,C2,R2,R3,data5,f);


function yourJsFunction() {
  //mydiv.style.display="none";

  //data_c2=data_c4;
 
 var data6 = document.getElementById("data6").value;
  var data5 = document.getElementById("data5").value;
  data_r3=document.getElementById("r_3").value;
  data_c2 = document.getElementById("c_2").value;
  data_r2=range.value;
  console.log(data_r2);
  
  //console.log(e.target.value);
  //data_r2 => (data_r2 && parseFloat(data7));
  //data_r2=document.getElementById("myRange");
  console.log(data_L);
  console.log(data_c2);
  console.log(data5);
  console.log(data6);
  console.log(data_r2);

  if (data6 == "" || data5 == "") {
    swal("Fill empty values");// to show the pop up because it is required

    return;
  }
  if (data_c2 == "") {
    swal("Select some the capacirence");
    return;
  }
     if (data6 <= 0 || data5 <= 0) {
    swal("Invalid Values");

    return;
  }
  data_c2 = parseFloat(data_c2);// used for converting int to flaot
  data_r2 = parseFloat(data_r2);
  var val_l = data_r3 * data_c2 * data_r2;
  // Create a new table row for each input value

  var row = document.createElement("tr");
  console.log(data_r3,data_c2,data_r2,data_L);

  var l_min, l_max;
  l_min = 0.98 * data_L;
  l_max = 1.02 * data_L;


  /*cur=curr;
  var x2 = (Math.floor(100000 / (2 * 3.14 * data5 * data_c2))) / 100000;
  var z1, z2, z3, z4, z5, z6;
  z1 = data_r1 + "+j" + (Math.floor(2 * 3.14 * data_L * 100000)) / 100000;
  z2 = data_r2 + "-j" + x2;
  z3 = data_r3;
  z4 = "-j" + x2;
*/
   // const arr=[data1,data2,data3,data4,data5,data6];
   var R1=data_r1,C2=data_c2,R2=data_r2;
   const arr = [R1,val_l,C2,R2,data5,data6];
   console.log(val_l, l_min, l_max);
   if (val_l>l_min && val_l<l_max) {
    
    swal("Bridge is Balanced");
    for (var i = 1; i <= 6; i++) {
      if(i==2||i==3)
      {
        var data = arr[i - 1];

      // Create a new table row element

      // Create a new table data element
      var cell = document.createElement("td");
      if(i==2)
      cell.innerHTML = (data*1000).toFixed(2);
      else
      {
        cell.innerHTML = (data*1000000).toFixed(1);
      }

      // Add the table data to the table row
      row.appendChild(cell);

      // Add the table row to the table
      document.getElementById("myTable").appendChild(row);
      }
      else{
      
        var data = arr[i - 1];
                // Create a new table row element

      // Create a new table data element
      var cell = document.createElement("td");
      cell.innerHTML = data;

      // Add the table data to the table row
      row.appendChild(cell);

      // Add the table row to the table
      document.getElementById("myTable").appendChild(row);
      }
    }
    //data_L =(data_L+0.002)%0.004;
    //data_L=Math.max(data_L,0.001);
    //console.log(data_L);
  }


  else {
    var audio = new Audio("Timer.mp3");
    audio.play();
    swal("Unbalanced Bridge");
    if (val_l < (2 * data_L) && val_l > (1 / 2) * data_L)
      {audio.volume = 0.1;}
    else if (val_l < (5 * data_L) && val_l > (1 / 5) * data_L)
      audio.volume = .5;
    else if (val_l < (25 * data_L) && val_l > (1 / 25) * data_L)
      audio.volume = 0.75;
    else
      audio.volume = 1.0;

    console.log(audio.volume);


  }
}
var count1 = 1, count2 = 1, count3 = 1, count4 = 1, count5=1;
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
instance = jsPlumb.getInstance({});
instance.setContainer("diagram");
instance.bind("ready", function () {
  instance.registerConnectionTypes({
    "red-connection": {
      paintStyle: { stroke: "blue", strokeWidth: 2 },
      hoverPaintStyle: { stroke: "blue", strokeWidth: 5 },/*this is for connecting wire*/
      connector: "Flowchart"
    }
  });
  // https://stackoverflow.com/a/4502207

  $(document).bind("click", function (event) {
    //custom menu is closed when the user clicks outside of it
    $("div.custom-menu").remove();
  });
  //event handler to all elements with class "control" inside an element with ID "diagram"
  $("body").on("contextmenu", "#diagram .control", function (event) {
    event.preventDefault();
    window.selectedControl = $(this).attr("id");
    console.log(window.selectedControl);
    /*user right-clicks on a control, it prevents the default behavior (opening the browser 
    context menu), and stores the ID of the clicked control in a global variable called 
    "selectedControl". It then creates a custom menu element and appends it to the body of
     the page, positioning it at the mouse pointer's location.*/
    $("<div class='custom-menu'><button class='delete-control'>Delete control</button></div>")
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + "px" });
  });

  $("body").on("click", ".delete-control", function (event) {
    instance.remove(window.selectedControl);
    /*a click event handler to the "Delete control" button inside the custom menu.
     When the user clicks on this button, it removes the selected control from the
      diagram canvas using the ID stored in the "selectedControl" variable.*/
  });

  $("#toolbox .control").draggable({
    helper: "clone",
    containment: "#diagram",
    appendTo: "#diagram"
  });


  $("#diagram").droppable({
    drop: function (event, ui) {
      var id;
      var clone = $(ui.helper).clone(true);
      var s = clone.attr("class");
      if (s[8] == 'r') {
        id = s[8] + count1.toString();
        count1++;
      }
      else if (s[8] == 'v') {
        id = s[8] + count2.toString();
        count2++;
      }
      else if (s[8] == 't') {
        id = s[8] + count3.toString();
        count3++;
      }
      else if (s[8] == 'c') {
        id = s[8] + count4.toString();
        count4++;
      }
      else if (s[8] == 'l') {
        id = s[8] + count5.toString();
        count5++;
      }

      clone.attr("id", id);
      clone.appendTo(this);


      instance.draggable(id, { containment: true });


    
      if (id[0] == 'v') {

        instance.addEndpoint(id, {
          endpoint: ["Dot",{radius:10}], maxConnections: 2,
          anchor: ["Left"],
          isSource: true, paintStyle: { fill: "red" },
        
          connectionType: "red-connection"
        });

        instance.addEndpoint(id, {
          endpoint: ["Dot",{radius:10}], maxConnections: 2,
          anchor: ["Right"],
          isTarget: true,
          connectionType: "red-connection"
        });

      }
      else if (id[0] == 't') {
        instance.addEndpoint(id, {
          endpoint: ["Dot",{radius:10}],
          anchor: ["Left"],
          isTarget: true,
          connectionType: "red-connection"
        });

        instance.addEndpoint(id, {
          endpoint: ["Dot",{radius:10}],
          anchor: ["Right"], paintStyle: { fill: "red" },
          isSource: true,
          connectionType: "red-connection"
        });

      }
      
      else {
        instance.addEndpoint(id, {
          endpoint: ["Dot",{radius:10}], maxConnections: 2,
          anchor: ["Right"], paintStyle: { fill: "red" },
          isSource: true,
          connectionType: "red-connection"
        });

        instance.addEndpoint(id, {
          endpoint: ["Dot",{radius:10}], maxConnections: 2,
          anchor: ["Left"],
          isTarget: true,
          connectionType: "red-connection"
        });
      }
    }
  })
});

document.getElementsByTagName("button")[0].onclick = contagem;

function contagem() {
var p_top=document.querySelector('#diagram' ).getBoundingClientRect().top-60 ;
var p_left=document.querySelector('#diagram').getBoundingClientRect().left-40;
  var allConnections = instance.getConnections({
    //scope: "someScope"
  });
  const Tid = []; const Sid = [];
  //swal(allConnections.length);
  for (var i = 0; i < allConnections.length; i++) {
    var target = allConnections[i].targetId;
    var source = allConnections[i].sourceId;
    Tid[i] = target;
    Sid[i] = source;
  }
  const set1 = new Set();
  for (var i = 0; i < Tid.length; i++) {
    set1.add(Tid[i]);
  }
  const arr = [...set1].sort();
  const set_1 = new Set(arr);
  const set2 = new Set();
  for (var i = 0; i < Sid.length; i++) {
    set2.add(Sid[i]);
  }
  const arr1 = [...set2].sort(); const arr_r = []; const arr_c = [];
  var c_r = 0, c_v = 0, c_t = 0, s_v, j = 0, c_c = 0, c_L = 0, k = 0, s_L;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i][0] == 'r') { c_r++; arr_r[j] = arr1[i]; j++; }
    else if (arr1[i][0] == 'v') { c_v++; s_v = arr1[i]; }
    else if (arr1[i][0] == 'c') { c_c++; arr_c[k] = arr1[i]; k++; }
    else if (arr1[i][0] == 'l') { c_L++; s_L = arr1[i]; }
    else
      c_t++;
  }
  const set_2 = new Set(arr1);
  console.log(arr_r, arr_c);
  if (Tid.length != 10 || Sid.length != 10 || !setsAreEqual(set_1, set_2) || c_r != 3 || c_v != 1 || c_t != 1 || c_L != 1 || c_c != 2) {
    swal("Wrong Connection");
  }
  else {
    var amp = {};// this is map to store element connected with this element as source and then destination
    for (var i = 0; i < Sid.length; i++) {
      amp[Sid[i]] = amp[Sid[i]] || [];
      amp[Sid[i]].push(Tid[i]);
    }
    for (var i = 0; i < Tid.length; i++) {
      amp[Tid[i]] = amp[Tid[i]] || [];
      amp[Tid[i]].push(Sid[i]);
    }
    console.log(amp);
    const s_element = new Set();
    var s = amp[arr[6]][0];
    s_element.add(s);
    //const r_pos=[];
    {
      console.log(s, amp[s].length, amp[s][0]);
      console.log(arr);
      console.log(amp);
      if (s[0] == 'r' && (amp[s].length == 3 && amp[s][0] == arr[7]))// if galvanometer is connected to r3
      {
        console.log(s);
        r_top = document.querySelector('#' + s + '').getBoundingClientRect().top -p_top;
        r_left = document.querySelector('#' + s + '').getBoundingClientRect().left-p_left;
        r_pos[2] = [r_top, r_left];
        var s1, s2;
        if (amp[s][1] != arr[6]) { s1 = amp[amp[s][2]][1]; s = amp[s][1]; }
        else { s1 = amp[amp[s][1]][1]; s = amp[s][2]; }

        if (amp[s1][0] != arr[6])
          s2 = amp[s1][0];
        else
          s2 = amp[s1][1];
        console.log(r_L(0, amp, s, arr), r_c(1, amp, s1, arr), c_c1(0, amp, s2, arr));
        console.log(s, s1, s2);
        if (r_L(0, amp, s, arr) && r_c(1, amp, s1, arr) && c_c1(0, amp, s2, arr))//r_L(1,amp,s,arr)&&r_c(0,amp,s1,arr)&&c_c1(0,amp,s2,arr)

        {
          
          var b = document.getElementById('btn1');
          b.removeAttribute('disabled');
          // or button.disabled = false;
     
          swal("Right connection go....ahead");
          
          var v_top = document.querySelector('#' + s_v + '').getBoundingClientRect().top -p_top;
          var v_left = document.querySelector('#' + s_v + '').getBoundingClientRect().left-p_left;

          $("<div id='abcd' style = 'position: absolute;top:" + v_top + "px ; left:" + v_left + "px ;'><b>V,f</b></div>")
            .appendTo("#diagram");
            $("<div style= 'position: absolute;top:" + (v_top-40 )+ "px ; left:" + (v_left+60) + "px ;'><img  src='gnd.png'></div>").appendTo('#diagram');

          $("<div id='abc' style = 'position: absolute;top:" + L_top + "px ; left:" + (L_left-30) + "px ;'><b>L<sub>1</sub>(Unknown)</b></div>")
            .appendTo("#diagram");
          $("<div id='bcd' style = 'position: absolute;top:" + c_top2 + "px ; left:" + c_left2 + "px ;'><b>C<sub>2</sub></b></div>")
            .appendTo("#diagram");
          $("<div id='abd' style = 'position: absolute;top:" + c_top4 + "px ; left:" + c_left4 + "px ;'><b>C<sub>4</sub></b></div>")
            .appendTo("#diagram");
          console.log(r_pos);

          for (var i = 1; i < 3; i++) {
            $("<div id='r1_tag' style = 'position: absolute;top:" + r_pos[i][0] + "px ; left:" + r_pos[i][1] + "px ;'><b>R<sub>" + (i + 1) + "</sub></b></div>")
              .appendTo("#diagram");
          }

          $("<div id='r1_tag' style = 'position: absolute;top:" + r_pos[0][0] + "px ; left:" + r_pos[0][1] + "px ;'><b>R<sub>1</sub></b></div>")
            .appendTo("#diagram");
          mydiv.style.display = "block";

          var div1 = document.getElementById("diagram");
          var div2 = document.getElementById("toolbox");

          div1.classList.add("no-pointer-events");
          div2.classList.add("no-pointer-events");

        }

        else
          swal("Wrong connection");
      }

      else if (s[0] == 'c' && amp[s].length == 3 && amp[s][0] == arr[7])// galvanometer is conneccted to c4
      {
        console.log(s);
        c_top4 = document.querySelector('#' + s + '').getBoundingClientRect().top -p_top;
        c_left4 = document.querySelector('#' + s + '').getBoundingClientRect().left - p_left;
        var s1, s2;
        if (amp[s][1] != arr[6]) { s1 = amp[amp[s][2]][1]; s = amp[s][1]; }
        else {
          s1 = amp[amp[s][1]][1]; s = amp[s][2];
        }

        if (amp[s1][0] != arr[6])
          s2 = amp[s1][0];
        else
          s2 = amp[s1][1];
        //console.log(s,s1,s2);
        //console.log(r_c(0,amp,s,arr),r_L(1,amp,s1,arr),r_r(0,amp,s2,arr));
        if (r_c(0, amp, s, arr) && r_L(1, amp, s1, arr) && r_r(0, amp, s2, arr)) {
            var b = document.getElementById('btn1');
            b.removeAttribute('disabled');
            // or button.disabled = false;
       
          swal("Right connection go....ahead");
          var v_top = document.querySelector('#' + s_v + '').getBoundingClientRect().top -p_top;
          var v_left = document.querySelector('#' + s_v + '').getBoundingClientRect().left-p_left;

          $("<div id='abcd' style = 'position: absolute;top:" + v_top + "px ; left:" + v_left + "px ;'><b>V,f</b></div>")
            .appendTo("#diagram");
            $("<div style= 'position: absolute;top:" + (v_top-40 )+ "px ; left:" + (v_left+60) + "px ;'><img  src='gnd.png'></div>").appendTo('#diagram');

          $("<div id='abc' style = 'position: absolute;top:" + L_top + "px ; left:" + (L_left-25) + "px ;'><b>L<sub>1</sub>(Unknown)</b></div>")
            .appendTo("#diagram");
          $("<div id='bcd' style = 'position: absolute;top:" + c_top2 + "px ; left:" + c_left2 + "px ;'><b>C<sub>2</sub></b></div>")
            .appendTo("#diagram");
          $("<div id='abd' style = 'position: absolute;top:" + c_top4 + "px ; left:" + c_left4 + "px ;'><b>C<sub>4</sub></b></div>")
            .appendTo("#diagram");
          console.log(r_pos);
          for (var i = 1; i < 3; i++) {
            $("<div id='r1_tag' style = 'position: absolute;top:" + r_pos[i][0] + "px ; left:" + r_pos[i][1] + "px ;'><b>R<sub>" + (i + 1) + "</sub></b></div>").appendTo("#diagram");
          }

          $("<div id='r1_tag' style = 'position: absolute;top:" + r_pos[0][0] + "px ; left:" + r_pos[0][1] + "px ;'><b>R<sub>1</sub></b></div>").appendTo("#diagram");
          mydiv.style.display = "block";

          var div1 = document.getElementById("diagram");
          var div2 = document.getElementById("toolbox");

          div1.classList.add("no-pointer-events");
          div2.classList.add("no-pointer-events");

        }

        else
          swal(" Wrong connection");
      }
      else {
        swal("Wrong Connection");
      }



      console.log(s_element);

    }
  }
}
function setsAreEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }

  return Array.from(a).every(element => {
    return b.has(element);
  });
}
function r_r(count, map, so, arr)//r3
{var p_top=document.querySelector('#diagram' ).getBoundingClientRect().top-60 ;
var p_left=document.querySelector('#diagram').getBoundingClientRect().left-40;

  r_top = document.querySelector('#' + so + '').getBoundingClientRect().top -p_top;
  r_left = document.querySelector('#' + so + '').getBoundingClientRect().left-p_left;
  r_pos[2] = [r_top, r_left];
  if (so[0] != 'r' || map[so].length != (count + 2) || map[so][0] != arr[7])
    return false;
  else
    return true;
}
function c_c1(count, map, so, arr)//c4
{var p_top=document.querySelector('#diagram' ).getBoundingClientRect().top-60 ;
var p_left=document.querySelector('#diagram').getBoundingClientRect().left-40;

  c_top4 = document.querySelector('#' + so + '').getBoundingClientRect().top -p_top;
  c_left4 = document.querySelector('#' + so + '').getBoundingClientRect().left-p_left;
  if (so[0] != 'c' || map[so].length != (count + 2) || map[so][0] != arr[7])
    return false;
  else
    return true;
}
function r_L(count, map, so, arr)//r1 L1
{var p_top=document.querySelector('#diagram' ).getBoundingClientRect().top-60 ;
var p_left=document.querySelector('#diagram').getBoundingClientRect().left-40;

  if (so[0] == 'r') {
    r_top = document.querySelector('#' + so + '').getBoundingClientRect().top -p_top;
    r_left = document.querySelector('#' + so + '').getBoundingClientRect().left-p_left;
    r_pos[0] = [r_top, r_left];
    if (map[so].length != (2 + count))//||map[so][1+count][0]!=map[arr[7]][0]
      return false;
    else {
      so = map[so][1 + count];
      L_top = document.querySelector('#' + so + '').getBoundingClientRect().top - p_top;
      L_left = document.querySelector('#' + so + '').getBoundingClientRect().left-p_left;
      if (map[so].length != 2 || map[so][1] != arr[7])
        return false;
      else
        return true;
    }
  }
  else {
    L_top = document.querySelector('#' + so + '').getBoundingClientRect().top - p_top;
    L_left = document.querySelector('#' + so + '').getBoundingClientRect().left -p_left;
    if (map[so].length != (2 + count))//||map[so][1+count]!=map[arr[7]][0]
      return false;
    else {
      so = map[so][1 + count];
      r_top = document.querySelector('#' + so + '').getBoundingClientRect().top  - p_top;
      r_left = document.querySelector('#' + so + '').getBoundingClientRect().left-p_left ;
      r_pos[0] = [r_top, r_left];
      if (map[so].length != 2 || map[so][1] != arr[7])
        return false;
      else
        return true;

    }
  }
}
function r_c(count, map, so, arr)//r2 c2
{var p_top=document.querySelector('#diagram' ).getBoundingClientRect().top-60 ;
var p_left=document.querySelector('#diagram').getBoundingClientRect().left-40;

  if (so[0] == 'r') {
    r_top = document.querySelector('#' + so + '').getBoundingClientRect().top - p_top;
    r_left = document.querySelector('#' + so + '').getBoundingClientRect().left-p_left;
    r_pos[1] = [r_top, r_left];
    if (map[so].length != (2 + count))
      return false;
    else {
      so = map[so][1 + count];
      c_top2 = document.querySelector('#' + so + '').getBoundingClientRect().top - p_top;
      c_left2 = document.querySelector('#' + so + '').getBoundingClientRect().left-p_left ;
      if (map[so].length != 2 || map[so][1] != arr[7])
        return false;
      else
        return true;

    }
  }
  else {
    c_top2 = document.querySelector('#' + so + '').getBoundingClientRect().top - p_top;
    c_left2 = document.querySelector('#' + so + '').getBoundingClientRect().left-p_left;
    if (map[so].length != (2 + count))
      return false;
    else {
      so = map[so][1 + count];
      r_top = document.querySelector('#' + so + '').getBoundingClientRect().top - p_top;
      r_left = document.querySelector('#' + so + '').getBoundingClientRect().left-p_left ;
      r_pos[1] = [r_top, r_left];
      if (map[so].length != 2 || map[so][1] != arr[7])
        return false;
      else
        return true;

    }
  }
}
