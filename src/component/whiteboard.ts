class WhiteBoardEventHandler {
    can: any
    ct: any
    mf: boolean = false
    ox: number = 0
    oy: number = 0
    x: number = 0
    y: number = 0
    ref: any

    constructor(ref: any) {
        this.ref = ref
    }

    init() {
        //初期設定
        this.can = this.ref.current;
        this.ct = this.can.getContext("2d");
        this.ct.strokeStyle = "#000000";
        this.ct.lineWidth = 2;
        this.ct.lineJoin = "round";
        this.ct.lineCap = "round";

        this.can.addEventListener("touchstart", this.onTouchStart.bind(this), {passive: false})
        this.can.addEventListener("touchmove", this.onTouchMove.bind(this), {passive: false})
        this.can.addEventListener("touchend", this.onTouchEnd.bind(this), {passive: false})
        this.clearCan();
    }

    getAbsolutePosition(elm: any) {
        const {left, top} = elm.getBoundingClientRect();
        const {left: bleft, top: btop} = document.body.getBoundingClientRect();
        return {
            left: left - bleft,
            top: top - btop,
        };
    }

    onTouchStart(event: any) {
        this.mf = true;
        var target = this.getAbsolutePosition(event.target)
        this.ox = event.touches[0].pageX - target.left;
        this.oy = event.touches[0].pageY - target.top;
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    onTouchMove(event: any) {
        if (this.mf) {
            var target = this.getAbsolutePosition(event.target)
            this.x = event.touches[0].pageX - target.left;
            this.y = event.touches[0].pageY - target.top;
            this.drawLine();
            this.ox = this.x;
            this.oy = this.y;
        }
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    onTouchEnd(event: any) {
        this.mf = false;
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    onMouseDown(event: any) {
        this.ox = event.clientX - event.target.getBoundingClientRect().left;
        this.oy = event.clientY - event.target.getBoundingClientRect().top;
        this.mf = true;
    }

    onMouseMove(event: any) {
        if (this.mf) {
            this.x = event.clientX - event.target.getBoundingClientRect().left;
            this.y = event.clientY - event.target.getBoundingClientRect().top;
            this.drawLine();
            this.ox = this.x;
            this.oy = this.y;
        }
    }

    onMouseUp(event: any) {
        this.mf = false;
    }

    drawLine() {
        this.ct.beginPath();
        this.ct.moveTo(this.ox, this.oy);
        this.ct.lineTo(this.x, this.y);
        this.ct.stroke();
    }

    clearCan() {
        this.ct.fillStyle = "rgb(255,255,255)";
        this.ct.fillRect(0, 0,
            this.can.getBoundingClientRect().width,
            this.can.getBoundingClientRect().height);
    }
}

export {WhiteBoardEventHandler}