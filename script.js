const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');
const body = document.querySelector('body');

generateBtn.addEventListener('click', () => {
    // 기존 이미지가 있는지 확인
    if (gridContainer.firstChild) {
        // 기존 이미지가 있을 경우, 팝업창을 띄워 이미지를 새로 생성할 것인지 확인
        if (confirm('이미지를 새로 생성하시겠습니까?')) {
            // 기존 이미지 제거
            removeAllImages();

            // 30개의 이미지 생성
            for (let i = 0; i < 30; i++) {
                generateRandomImage();
            }
        }
    } else {
        // 기존 이미지가 없을 경우, 바로 30개의 이미지 생성
        for (let i = 0; i < 30; i++) {
            generateRandomImage();
        }
    }
});

function generateRandomImage() {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const img = document.createElement('img');
    img.src = `https://picsum.photos/500?random=${randomNumber}`;
    
    // 이미지를 보이게 하기 위해 style을 추가
    img.style.display = 'block';

    // 이미지 클릭 이벤트 추가
    img.addEventListener('click', (event) => {
        openModal(img.src, img.width, img.height, event.clientX, event.clientY);
    });

    gridContainer.appendChild(img);
}

function removeAllImages() {
    // 기존 이미지를 모두 제거
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function openModal(imageSrc, imageWidth, imageHeight, clickX, clickY) {
    // 모달 생성
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    // 이미지 표시
    const modalImg = document.createElement('img');
    modalImg.src = imageSrc;
    modalImg.width = imageWidth; // 이미지의 크기를 모달에 설정
    modalImg.height = imageHeight;
    modal.appendChild(modalImg);

    // 닫기 버튼 추가
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
        closeModal(modal);
    });
    modal.appendChild(closeBtn);

    // 모달을 body에 추가
    body.appendChild(modal);

    // 모달을 클릭한 위치에 위치시키기
    const modalLeft = clickX - imageWidth / 2;
    const modalTop = clickY - imageHeight / 2;
    modal.style.left = `${modalLeft}px`;
    modal.style.top = `${modalTop}px`;
}

function closeModal(modal) {
    // 모달 닫기
    modal.remove();
}
