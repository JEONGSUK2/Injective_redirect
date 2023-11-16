const $subNav = document.querySelector(".sub-nav");
const $Nav = document.querySelector(".nav-menu1");
const $Hiddenimg = document.querySelectorAll(".hidden-images");
const $Imglist = document.querySelectorAll(".hidden-images .hidden-imageslist");


$Nav.addEventListener("mouseover", function () {
    $subNav.style.display = "block";
})
$Nav.addEventListener("mouseout", function () {
    $subNav.style.display = "none";
})


let countBox = document.querySelector(".count1"),
    count = 40025900;

let counting = setInterval(function () {
    if (count == 5000000) {
        clearInterval(counting);
    }
    count += 1;
    countBox.innerHTML = new Intl.NumberFormat().format(count);
}, 900);

let counTer = document.querySelector(".count2"),
    counter = 261729430;

let abcd = setInterval(function () {
    if (counter == 30000000) {
        clearInterval(abcd);
    }
    counter += 1;
    counTer.innerHTML = new Intl.NumberFormat().format(counter);
}, 200);





const $lists = document.querySelectorAll(".hidden")
const $popUpImgs = document.querySelectorAll(".hidden-imageslist")
const $SvgImgs = document.querySelectorAll(".vec-hidden")

document.querySelector('#item').style.opacity = "1";
document.querySelectorAll(".hidden")[0].classList.add("on")


$lists.forEach((list, i) => {
    // console.log(list)
    list.addEventListener("click", function () {
        // console.log(list)
        $lists.forEach((list, i) => {
            list.classList.remove("on")
            // console.log(list)          
        })
        list.classList.add("on")

        $popUpImgs.forEach((img, i) => {
            img.style.opacity = "0";
            // console.log(img)
        })
        
        setTimeout(() => {
            $popUpImgs[i].style.opacity = "1";
        }, 300);
    })
})

// querySelectorAll을 할 경우 forEach문과 세트
// 왜? querySelector의 경우 하나의 값만 선택할 수 있기때문
// querySelectorAll 배열(복수 값)이 선택되기 때문에 forEach는 배열반복이기 때문에 세트임
// 변수명.foreach((e,i))에서 e는 element(요소)>> e는 햇갈릴 경우 이름 변경해주기(변수명의 단수) i는 index 
//  list.addEventListener 클릭이벤트를 주는데 이것은 클릭한번에 하나만 선택 되기 때문에
// $lists.forEach((list,i) 반복문을 한번 더 반복 해주기
// list.classList.remove("on") 선택된 값을 제외하고 on기능을 삭제해야함
// remove는 모든 요의 기능을 제거
// list.classList.add("on") 하나의 선택된 값을 추가해주기 위해 add를 사용



// 아이콘 div 생성
function CardData(data){
    data.map((e, i) => {
        let div = document.createElement("div");
        div.className = "cardMenuBox";

        let cardMenu = document.createElement("div");
        cardMenu.className = "cardMenu";
        div.appendChild(cardMenu);

        let Img = document.createElement("img");
        Img.src = e.img;
        Img.alt = e.title;
        cardMenu.appendChild(Img);

        let Name = document.createElement("span");
        Name.textContent = e.span;
        Name.className = "imgName";
        cardMenu.appendChild(Name);
        document.querySelector(".main_content_wrap .community .community_menu .community_grid").appendChild(div)
    })
}

// 클릭 이벤트 만들기
const $CateList = document.querySelectorAll(".cate_list li");
const $container = document.querySelector(".community_grid");
const $wrapper = document.querySelector(".grid-wrap")

$wrapper.classList.add("on")
$CateList[0].classList.add("active")

$CateList.forEach((e,i)=>{
    // console.log(e,i);
    e.addEventListener("click",function(event){
        $CateList.forEach((e,i)=>{
            e.classList.remove("active");
        })
        $CateList[i].classList.add("active");
        
        event.preventDefault()
            $wrapper.style.transition = "0s";
            $wrapper.classList.remove("on")
        setTimeout(() => {
            $wrapper.style.transition = "1s"
            $wrapper.classList.add("on")
        }, 100);
        $CateList.forEach((el,index)=>{
            $CateList[index].classList.remove("on");
        })
        const $attr = e.getAttribute("data-type");
        $CateList[i].classList.add("on")
        
        axios.get("../data/blockchain.json")
        .then(function(res){
            let PortData;
            if($attr === "전체"){
              PortData = res.data.Card
            }else{
                PortData = res.data.Card.filter(item => item.type == $attr)
            }
            CardData(PortData);
        })
        .catch(function(error){
            console.log(error);
        })

        $container.innerHTML = '';
    })
})
axios.get("../data/blockchain.json")
.then(function(res){
    res.data.Card.filter(item => item.type == "PAGE1")
    CardData(res.data.Card.filter(item => item.type == "PAGE1"))
})

.catch(function(error){
    console.log(error)
})



