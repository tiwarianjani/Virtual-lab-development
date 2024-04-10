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

  const r_pos = [], c_pos = [];
  let r_top, r_left, v_left, v_right;
  const mydiv = document.getElementById('mydiv');

  var data_c2 = 0.00000001, data_r1 = 200, data_c1 = (Math.max(Math.floor((Math.random() * 3) + 1), 1)) * 0.000001, data_c4, data_r3, data_r4;
  var range = document.querySelector('#rangeInput');
  var field = document.querySelector('#numberInput');
  var e;

  range.addEventListener('input', function (e) {
    field.value = e.target.value;
  });

  field.addEventListener('input', function (e) {
    range.value = e.target.value;
  });
  console.log(range.value);
  console.log(field.value);
  var div1 = document.getElementById("diagram");
  // for r4
  range.addEventListener('input',function(e){
    data_r3=document.getElementById("r_3").value;
   //console.log(data5," ",data6);
   data5=document.getElementById('data5').value;
   
   if(data5!=""&&data_r4!=""&& div1.classList.contains('no-pointer-events'))
   {  data_r4=range.value;
     data_c2 = parseFloat(data_c2);// used for converting int to flaot
    data_r3 = parseFloat(data_r3);
    
    var val_c =( data_c2 * data_r4*1000 )/data_r3;
    var mx=Math.max(val_c,data_c1);
       var mn=Math.min(val_c,data_c1);
     var  i=(mx-mn)/mx;

       i=i*data5*5.0;
        i/=15;
        
    var l_min, l_max;
    l_min = 0.97 * data_c1;
    l_max = 1.03 * data_c1;
  i=i.toFixed(3);
    document.getElementById("digi").innerHTML=`${i} mV`;}
   
  });

  // for r3
  document.getElementById('r_3').addEventListener('input',function(e){
    data_r3=document.getElementById("r_3").value;
   //console.log(data5," ",data6);
   data5=document.getElementById('data5').value;
   
   if(data5!=""&&data_r4!=""&& div1.classList.contains('no-pointer-events'))
   {  data_r4=range.value;
     data_c2 = parseFloat(data_c2);// used for converting int to flaot
     data_r3 = parseFloat(data_r3);
    
    var val_c =( data_c2 * data_r4*1000 )/data_r3;
    var mx=Math.max(val_c,data_c1);
    var mn=Math.min(val_c,data_c1);
  var  i=(mx-mn)/mx;

    i=i*data5*5.0;
     i/=15;
     
 var l_min, l_max;
 l_min = 0.97 * data_c1;
 l_max = 1.03 * data_c1;
i=i.toFixed(3);
    document.getElementById("digi").innerHTML=`${i} mV`;}
   
  });
  // for v
  document.getElementById('data5').addEventListener('input',function(e){
    data_r3=document.getElementById("r_3").value;
   //console.log(data5," ",data6);
   data5=document.getElementById('data5').value;
   
   if(data5!=""&&data_r4!=""&& div1.classList.contains('no-pointer-events'))
   {  data_r4=range.value;
     data_c2 = parseFloat(data_c2);// used for converting int to flaot
     data_r3 = parseFloat(data_r3);
    
    var val_c =( data_c2 * data_r4*1000 )/data_r3;
    var mx=Math.max(val_c,data_c1);
       var mn=Math.min(val_c,data_c1);
     var  i=(mx-mn)/mx;

       i=i*data5*5.0;
        i/=15;
        
    var l_min, l_max;
    l_min = 0.97 * data_c1;
    l_max = 1.03 * data_c1;
  i=i.toFixed(3);
    document.getElementById("digi").innerHTML=`${i} mV`;}
   
  });




  function yourJsFunction() {
    //mydiv.style.display="none";

    //data_c2=data_c4;
    var data6 = document.getElementById("data6").value;
    var data5 = document.getElementById("data5").value;
    data_c4 = document.getElementById("c_4").value;
    data_r4 = range.value;
    //console.log(data_r2);
    data_r3 = document.getElementById("r_3").value;

    console.log(data_r3);
    console.log(data_r4);
    console.log(data_c4);
    //console.log(e.target.value);
    //data_r2 => (data_r2 && parseFloat(data7));
    //data_r2=document.getElementById("myRange");
    //console.log(data_c);
    console.log(data_c2);
    console.log(data5);
    console.log(data6);
    //console.log(data_r2);

    if (data6 == "" || data5 == "" || data_r4 == "") {
      swal("Fill empty values");// to show the pop up because it is required

      return;
    }
    if (data_c4 == "") {
      swal("Select some the capacitance");
      return;
    }
    if (data6 <= 0 || data5 <= 0) {
      swal("Invalid Values");

      return;
    }
    // Create a new table row for each input value

    /* var row = document.createElement("tr");
    var val_c = data_c2 * data_r4 / data_r3;
    data_r1 = data_r3 * data_c4 / data_c2; */
  /*  var row = document.createElement("tr");
    var val_c = data_c2 * data_r4*1000 /data_r3;
    document.getElementById("digi").innerHTML=((val_c-data_c1)*1000).toFixed(5);

     
    data_r1=data_r3*data_c4/data_c2;
    data_r1=data_r1.toFixed(3);

    var l_min, l_max;
    l_min = 0.9 * val_c;
    l_max = 1.1 * val_c;

    console.log(l_min);
    console.log(l_max);
    //console.log(val_c);
    console.log(data_c1);
    //console.log(z1, z2, z3, z4, data5, data6);
    const arr = [data_r1, val_c, data_r3, data_c4, data_r4, data5, data6];
    // const arr = [z1, z2, z3, z4, data5];

*/

    
    var row = document.createElement("tr");
    var val_c =( data_c2 * data_r4*1000 )/data_r3;
    var l_min, l_max;
    l_min = 0.97 * val_c;
    l_max = 1.03 * val_c;
    //console.log(document.getElementById("digi").innerHTML);
    data_r1=(data_r3*data_c4/data_c2).toFixed(3);
    console.log(data_c1,val_c);
   

console.log(l_min);
console.log(l_max);
//console.log(val_c);
console.log(data_c1);
    //console.log(z1, z2, z3, z4, data5, data6);
     const arr=[data_r1,val_c,data_r3,data_c4,data_r4,data5,data6];
   // const arr = [z1, z2, z3, z4, data5];




    console.log(val_c, l_min, l_max);
if (data_c1 >=l_min && data_c1<=l_max) {
      swal("Bridge is Balanced");
      
      for (var i = 1; i <= 7; i++) {
        if (i == 2 || i == 4) {
          var data = arr[i - 1];

          // Create a new table row element

          // Create a new table data element
          var cell = document.createElement("td");
          cell.innerHTML = (data * 1000000).toFixed(3);

          // Add the table data to the table row
          row.appendChild(cell);

          // Add the table row to the table
          document.getElementById("myTable").appendChild(row);
        }
        else {
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
    }


    else {
      // error=((val_c-data_c1)/data_c1)*100;
      var audio = new Audio("Timer.mp3");
      audio.play();
      //swal("Unbalanced Bridge\n"+int(error)+"%");
      swal("Unbalanced Bridge\n");
      if (val_c < (2 * data_c1) && val_c > (1 / 2) * data_c1)
      audio.volume = 0.1;
    else if (val_c < (5 * data_c1) && val_c > (1 / 5) * data_c1)
      audio.volume = .5;
    else if (val_c < (25 * data_c1) && val_c > (1 / 25) * data_c1)
      audio.volume = 0.75;
    else
      audio.volume = 1.0;
    console.log(audio.volume);
    }
  }
  var count1 = 1, count2 = 1, count3 = 1, count4 = 1;
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

        clone.attr("id", id);
        clone.appendTo(this);


        instance.draggable(id, { containment: true });


        if (id[0] == 'v') {

          instance.addEndpoint(id, {
            endpoint: ["Dot", { radius: 10 }], maxConnections: 2,
            anchor: ["Left"],
            isSource: true, paintStyle: { fill: "red" }, options: {
              curviness: 50
            },
            connectionType: "red-connection"
          });

          instance.addEndpoint(id, {
            endpoint: ["Dot", { radius: 10 }], maxConnections: 3,
            anchor: ["Right"],
            isTarget: true, options: {
              curviness: 50
            },
            connectionType: "red-connection"
          });

        }
        else if (id[0] == 'r') {

          instance.addEndpoint(id, {
            endpoint: ["Dot", { radius: 10 }], maxConnections: 2,
            anchor: ["Left"],
            isTarget: true, options: {
              curviness: 50
            },
            connectionType: "red-connection"
          });

          instance.addEndpoint(id, {
            endpoint: ["Dot", { radius: 10 }], maxConnections: 2,
            anchor: ["Right"],
            isSource: true, paintStyle: { fill: "red" }, options: {
              curviness: 50
            },
            connectionType: "red-connection"
          });

        }
        else if (id[0] == 't') {
          instance.addEndpoint(id, {
            endpoint: ["Dot", { radius: 10 }],
            anchor: ["Left"],
            isTarget: true, options: {
              curviness: 50
            },
            connectionType: "red-connection"
          });

          instance.addEndpoint(id, {
            endpoint: ["Dot", { radius: 10 }],
            anchor: ["Right"], paintStyle: { fill: "red" },
            isSource: true, options: {
              curviness: 50
            },
            connectionType: "red-connection"
          });

        }
        else {
          instance.addEndpoint(id, {
            endpoint: ["Dot", { radius: 10 }], maxConnections: 3,
            anchor: ["Right"], paintStyle: { fill: "red" },
            isSource: true, options: {
              curviness: 50
            },
            connectionType: "red-connection"
          });

          instance.addEndpoint(id, {
            endpoint: ["Dot", { radius: 10 }], maxConnections: 2,
            anchor: ["Left"],
            isTarget: true, options: {
              curviness: 50
            },
            connectionType: "red-connection"
          });
        }
      }
    })
  });

  document.getElementsByTagName("button")[0].onclick = contagem;

  function contagem() {
    var p_top=document.querySelector('#diagram').getBoundingClientRect().top-65;
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
      //  else if (arr1[i][0] == 'l') { c_L++; s_L = arr1[i]; }
      else
        c_t++;
    }
    const set_2 = new Set(arr1);
    console.log(arr_r, arr_c);
    if (Tid.length != 11 || Sid.length != 11 || !setsAreEqual(set_1, set_2) || c_r != 3 || c_v != 1 || c_t != 1 || c_c != 3) {
      swal("Wrong Connections");
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
      // const s_element = new Set();
      var s = arr[6];
      // s_element.add(s);
      //const r_pos=[];

      console.log(s, amp[s].length, amp[s][0]);
      console.log(arr);
      console.log(amp);
      var s1, s2, s3, s4;
      console.log(amp[s][0][0]);
      if (amp[s][0][0] == 'c') {
        // check for c-r
        s = amp[s][0];//s=c3
        if (amp[s][1] != arr[6])
          s1 = amp[s][1];
        else
          s1 = amp[s][2];
        s3 = s1;
        s2 = amp[arr[6]][1];
        if (amp[s2][0] != arr[6])
          s4 = amp[s2][0];
        else
          s4 = amp[s2][1];
        console.log(s1, s2, s3, s4);
        console.log(cr(1, amp, s1, arr), fc_r(1, amp, s2, arr), c_c1(0, amp, s3, arr), r_r(0, amp, s4, arr));
        if ((!cr(1, amp, s1, arr)) || (!fc_r(1, amp, s2, arr)) || (!c_c1(0, amp, s3, arr)) || (!r_r(0, amp, s4, arr)))
          swal('wrong connection');
        else {
          swal("Right connection...go ahead"); s = amp[arr[6]][0];
          var f = document.getElementById("btn1");
          f.removeAttribute("disabled")
          s = amp[s][0];
          v_top = document.querySelector('#' + s + '').getBoundingClientRect().top-p_top ;
          v_left = document.querySelector('#' + s + '').getBoundingClientRect().left -p_left;
          $("<div id='v_tag' style = 'position: absolute;top:" + v_top + "px ; left:" + v_left + "px ;'><b>V,f</b></div>")
            .appendTo("#diagram");
            $("<div style= 'position: absolute;top:" + (v_top-40 )+ "px ; left:" + (v_left+60) + "px ;'><img  src='gnd.png'></div>").appendTo('#diagram');

          tag(r_pos, c_pos);
          mydiv.style.display = "block";
          var div1 = document.getElementById("diagram");

          var div2 = document.getElementById("toolbox");

          div1.classList.add("no-pointer-events");
          div2.classList.add("no-pointer-events");

        }
        // check for fc_r
        // check for c2
        // check for r3
      }
      else if (amp[s][0][0] == 'r') {
        s = amp[s][0];
        if (amp[s][1] != arr[6])
          s = amp[s][1];
        else
          s = amp[s][2];
        console.log(s);
        if (amp[s].length == 2)// if s=c1
        {
          s4 = amp[arr[6]][0];
          s2 = s;
          s1 = amp[arr[6]][1];
          s3 = s1;
          console.log(s1, s2, s3, s4);
          console.log(cr(0, amp, s1, arr), fc_r(0, amp, s2, arr), c_c1(1, amp, s3, arr), r_r(1, amp, s4, arr));
          if ((!cr(0, amp, s1, arr)) || (!fc_r(0, amp, s2, arr)) || (!c_c1(1, amp, s3, arr)) || (!r_r(1, amp, s4, arr)))
            swal(' wrong connection_g');
          else {
            swal("Right connectoin ....go ahead");
            var f = document.getElementById("btn1");
            f.removeAttribute("disabled")
            s = amp[arr[6]][0];
            s = amp[s][0];
            v_top = document.querySelector('#' + s + '').getBoundingClientRect().top -p_top;
            v_left = document.querySelector('#' + s + '').getBoundingClientRect().left - p_left;
            $("<div id='v_tag' style = 'position: absolute;top:" + v_top + "px ; left:" + v_left + "px ;'><b>V,f</b></div>")
              .appendTo("#diagram");
              $("<div style= 'position: absolute;top:" + (v_top-40 )+ "px ; left:" + (v_left+60 )+ "px ;'><img  src='gnd.png'></div>").appendTo('#diagram');
              tag(r_pos, c_pos);
            mydiv.style.display = "block";
            var div1 = document.getElementById("diagram");

            var div2 = document.getElementById("toolbox");

            div1.classList.add("no-pointer-events");
            div2.classList.add("no-pointer-events");
          }
        }
        else if (amp[s].length == 3)// if s=c2
        {
          s1 = s; s3 = s;
          s2 = amp[arr[6]][1];
          if (amp[s2][0] != arr[6])
            s4 = amp[s2][0];
          else
            s4 = amp[s2][1];
          console.log(s1, s2, s3, s4);
          console.log(cr(1, amp, s1, arr), fc_r(1, amp, s2, arr), c_c1(0, amp, s3, arr), r_r(0, amp, s4, arr));
          if ((!cr(1, amp, s1, arr)) || (!fc_r(1, amp, s2, arr)) || (!c_c1(0, amp, s3, arr)) || (!r_r(0, amp, s4, arr)))
            swal('Wrong connection');
          else {
            swal("Right connection....go ahead");
            var f = document.getElementById("btn1");
            f.removeAttribute("disabled")
            s = amp[arr[6]][0];
            s = amp[s][0];
            v_top = document.querySelector('#' + s + '').getBoundingClientRect().top -p_top;
            v_left = document.querySelector('#' + s + '').getBoundingClientRect().left - p_left;
            $("<div id='v_tag' style = 'position: absolute;top:" + v_top + "px ; left:" + v_left + "px ;'><b>V,f</b></div>")
              .appendTo("#diagram");
              $("<div style= 'position: absolute;top:" +( v_top-40 )+ "px ; left:" + (v_left+60) + "px ;'><img  src='gnd.png'></div>").appendTo('#diagram');

            tag(r_pos, c_pos);
            mydiv.style.display = "block";
            var div1 = document.getElementById("diagram");

            var div2 = document.getElementById("toolbox");

            div1.classList.add("no-pointer-events");
            div2.classList.add("no-pointer-events");
          }
        }
        else
          swal("Wrong connection")
      }
      else {
        swal('Wrong connection');
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
  {
    var p_top=document.querySelector('#diagram').getBoundingClientRect().top-65;
    var p_left=document.querySelector('#diagram').getBoundingClientRect().left-40;
    r_top = document.querySelector('#' + so + '').getBoundingClientRect().top -p_top;
    r_left = document.querySelector('#' + so + '').getBoundingClientRect().left - p_left;
    r_pos[1] = [r_top, r_left];
    if (map[so].length != (count + 2) || map[so][0] != arr[7])
      return false;
    else
      return true;
  }
  function c_c1(count, map, so, arr)//c2
  {        var p_top=document.querySelector('#diagram').getBoundingClientRect().top-65;
  var p_left=document.querySelector('#diagram').getBoundingClientRect().left-40;
c_top = document.querySelector('#' + so + '').getBoundingClientRect().top -p_top;
    c_left = document.querySelector('#' + so + '').getBoundingClientRect().left - p_left;
    c_pos[1] = [c_top, c_left];
    if (map[so].length != (count + 3) || map[so][count + 2] != arr[7])
      return false;
    else
      return true;
  }
  function fc_r(count, map, so, arr)//r1 c1
  {        var p_top=document.querySelector('#diagram').getBoundingClientRect().top-65;
  var p_left=document.querySelector('#diagram').getBoundingClientRect().left-40;
if (so[0] == 'r') {
      r_top = document.querySelector('#' + so + '').getBoundingClientRect().top -p_top;
      r_left = document.querySelector('#' + so + '').getBoundingClientRect().left - p_left;
      r_pos[0] = [r_top, r_left];
      if (map[so].length != (2 + count))//||map[so][1+count][0]!=map[arr[7]][0]
        return false;
      else {
        so = map[so][1 + count];
        c_top = document.querySelector('#' + so + '').getBoundingClientRect().top -p_top;
        c_left = document.querySelector('#' + so + '').getBoundingClientRect().left - p_left;
        c_pos[0] = [c_top,                                                                                                                                                  c_left];
        if (map[so].length != 2 || map[so][1] != arr[7])
          return false;
        else
          return true;
      }
    }
    else {
      c_top = document.querySelector('#' + so + '').getBoundingClientRect().top -p_top;
      c_left = document.querySelector('#' + so + '').getBoundingClientRect().left - p_left;
      c_pos[0] = [c_top, c_left];
      if (map[so].length != (2 + count))//||map[so][1+count]!=map[arr[7]][0]
        return false;
      else {
        so = map[so][1 + count];
        r_top = document.querySelector('#' + so + '').getBoundingClientRect().top - p_top;
        r_left = document.querySelector('#' + so + '').getBoundingClientRect().left - p_left;
        r_pos[0] = [r_top, r_left];
        if (map[so].length != 2 || map[so][1] != arr[7])
          return false;
        else
          return true;

      }
    }
  }
  function cr(count, map, so, arr)//r4 c4  here so is id of c2
  {       var p_top=document.querySelector('#diagram').getBoundingClientRect().top-65;
  var p_left=document.querySelector('#diagram').getBoundingClientRect().left-40;
if (count == 1) {
      // check for is it connected to c or r
      // then we need to verify accordingly
      var s1, s2;// here s1 for r4 and s2 for c4

      s1 = map[arr[6]][0];
      if (map[so][0] != s1)
        s2 = map[so][0];
      else
        s2 = map[so][1];

      if (s1[0] == 'c') {
        r_top = document.querySelector('#' + s2 + '').getBoundingClientRect().top-p_top;
        r_left = document.querySelector('#' + s2 + '').getBoundingClientRect().left - p_left;
        r_pos[2] = [r_top, r_left];
        c_top = document.querySelector('#' + s1 + '').getBoundingClientRect().top -p_top;
        c_left = document.querySelector('#' + s1 + '').getBoundingClientRect().left - p_left;
        c_pos[2] = [c_top, c_left];
      }
      else {
        r_top = document.querySelector('#' + s1 + '').getBoundingClientRect().top - p_top;
        r_left = document.querySelector('#' + s1 + '').getBoundingClientRect().left - p_left;
        r_pos[2] = [r_top, r_left];
        c_top = document.querySelector('#' + s2 + '').getBoundingClientRect().top -p_top;
        c_left = document.querySelector('#' + s2 + '').getBoundingClientRect().left - p_left;
        c_pos[2] = [c_top, c_left];
      }
      if (map[s1].length != 3 || map[s2].length != 2 || map[s1][0] != arr[7] || map[s2][0] != arr[7])
        return false;
      else
        return true;

    }
    else {
      var s1, s2;
      if (map[so][0] == arr[6]) {
        s1 = map[so][1];
        s2 = map[so][2];

      }
      else if (map[so][1] == arr[6]) {
        s1 = map[so][0];
        s2 = map[so][2];
      }
      else {
        s1 = map[so][0];
        s2 = map[so][1];
      }
      if (s1[0] == 'c') {
        r_top = document.querySelector('#' + s2 + '').getBoundingClientRect().top -p_top;
        r_left = document.querySelector('#' + s2 + '').getBoundingClientRect().left -p_left;
        r_pos[2] = [r_top, r_left];
        c_top = document.querySelector('#' + s1 + '').getBoundingClientRect().top -p_top;
        c_left = document.querySelector('#' + s1 + '').getBoundingClientRect().left -p_left;
        c_pos[2] = [c_top, c_left];
      }
      else {
        r_top = document.querySelector('#' + s1 + '').getBoundingClientRect().top -p_top;
        r_left = document.querySelector('#' + s1 + '').getBoundingClientRect().left -p_left;
        r_pos[2] = [r_top, r_left];
        c_top = document.querySelector('#' + s2 + '').getBoundingClientRect().top -p_top;
        c_left = document.querySelector('#' + s2 + '').getBoundingClientRect().left -p_left;
        c_pos[2] = [c_top, c_left];
      }
      if (map[s1].length != 2 || map[s1][0] != arr[7])
        return false;
      if (map[s2].length != 2 || map[s2][0] != arr[7])
        return false;
      return true;
    }

  }
  function tag(r, c) {
    var p_top=document.querySelector('#diagram').getBoundingClientRect().top-65;
    var p_left=document.querySelector('#diagram').getBoundingClientRect().left-40;
//console.log(r);
    for (var i = 0; i < 3; i++) {
      if (i != 1) {
        if(i==0)
        {$("<div id='r1_tag' style = 'position: absolute;top:" + c[i][0] + "px ; left:" + (c[i][1]-20) + "px ;'><b>C<sub>1</sub>(Unknown)</b></div>")
          .appendTo("#diagram");
        $("<div id='r1_tag' style = 'position: absolute;top:" + r[i][0] + "px ; left:" + r[i][1] + "px ;'><b>R<sub>" + (i + 1 + i / 2) + "</sub></b></div>")
          .appendTo("#diagram");
      }
    else   {$("<div id='r1_tag' style = 'position: absolute;top:" + c[i][0] + "px ; left:" + c[i][1] + "px ;'><b>C <sub>"+ (i + 1 + i / 2) + "</sub></b></div>")
    .appendTo("#diagram");
  $("<div id='r1_tag' style = 'position: absolute;top:" + r[i][0] + "px ; left:" + r[i][1] + "px ;'><b>R<sub>" + (i + 1 + i / 2) + "</sub></b></div>")
    .appendTo("#diagram");
}}
      else {
        $("<div id='r1_tag' style = 'position: absolute;top:" + c[i][0] + "px ; left:" + c[i][1] + "px ;'><b>C<sub>" + 2 + "</sub></b></div>")
          .appendTo("#diagram");
        $("<div id='r1_tag' style = 'position: absolute;top:" + r[i][0] + "px ; left:" + r[i][1] + "px ;'><b>R<sub>" + 3 + "</sub></b></div>")
          .appendTo("#diagram");
      }
    }

  }
