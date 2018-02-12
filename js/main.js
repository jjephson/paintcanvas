const canvas = document.getElementById('murloc');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;

const colorBackground = 'rgb(242, 237, 57)';
const colorMurloc = 'rgb(162, 101, 171)';
const colorHammer = 'rgb(123, 88, 68)';
const colorHill = 'rgb(23, 23, 23)';
const colorHillDark = 'rgb(146, 154, 19)';
const colorMountain = 'rgb(96, 69, 74)';
const colorShield = 'rgb(103, 131, 170)';

console.log();

fillObject(
    // Background
    ['0,0,800,1020'],
    colorBackground
);

paintObject(
    // Mountain
    ['0,700', '130,630', '250,690', '700,400', '750,450', '800,420', '800,1021', '0,1021', '0,700'],
    colorMountain
);

paintObject(
    // Hill
    ['321,710', '800,710', '800,1021', '500,1021', '321,710'],
    colorHill
);

paintObject(
    // Hill Dark
    ['321,710', '800,710', '800,850', '420,850', '321,710'],
    colorHillDark
);

// Murloc head
ctx.fillStyle = colorMurloc;
ctx.beginPath();
ctx.arc(520, 400, 120, 0, Math.PI * 2, true);
ctx.fill();

// Murloc body
ctx.fillStyle = colorMurloc;
ctx.beginPath();
ctx.arc(540, 550, 100, 0, Math.PI * 2, true);
ctx.fill();

paintObject(
    // Murloc left leg
    ['460,600', '390,650', '430,710', '410,730', '490,730', '490,690', '450,650', '500,600', '460,600',],
    colorMurloc
);

paintObject(
    // Murloc right leg
    ['540,640', '520,670', '530,700', '510,730', '590,730', '560,680', '580,640'],
    colorMurloc
);


fillObject(
    // Hammer
    ['230,300,150,110', '300,400,30,200'],
    colorHammer
);

paintObject(
    // Murloc Arm
    ['321,450', '450,480', '450,500', '321,470', '321,450'],
    colorMurloc
);

paintObject(
    // Shield 
    ['530,600', '600,550', '670,540', '710,650', '680,710', '610,710', '530,600'],
    colorShield
);

function paintObject(a, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(...a[0].split(','));
    for (i=1; i<a.length; i++) {
        ctx.lineTo(...a[i].split(','));
    }
    ctx.fill();
}

function fillObject(a, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    for (i=0; i<a.length; i++) {
        ctx.fillRect(...a[i].split(','));
    }
}
