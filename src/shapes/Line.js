(function() {
    /**
     * Line constructor.&nbsp; Lines are defined by an array of points
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Array} config.points can be a flattened array of points, or an array of point objects.
     *  e.g. [0,1,2,3] and [{x:1,y:2},{x:3,y:4}] are equivalent
     */
    Kinetic.Line = function(config) {
        this._initLine(config);
    };

    Kinetic.Line.prototype = {
        _initLine: function(config) {
            this.setDefaultAttrs({
                points: [],
                lineCap: 'butt'
            });

            // call super constructor
            Kinetic.Shape.call(this, config);
            this.shapeType = 'Line';
            this._setDrawFuncs();
        },
        drawFunc: function(canvas) {
            var points = this.getPoints(), length = points.length, context = canvas.getContext();
            context.beginPath();
            context.moveTo(points[0].x, points[0].y);

            for(var n = 1; n < length; n++) {
                var point = points[n];
                context.lineTo(point.x, point.y);
            }

            canvas.stroke(this);
        },
        /**
         * set points array
         * @name setPoints
         * @methodOf Kinetic.Line.prototype
         * @param {Array} can be an array of point objects or an array
         *  of Numbers.  e.g. [{x:1,y:2},{x:3,y:4}] or [1,2,3,4]
         */
        setPoints: function(val) {
            this.setAttr('points', Kinetic.Type._getPoints(val));
        }
    };
    Kinetic.Global.extend(Kinetic.Line, Kinetic.Shape);

    // add getters setters
    Kinetic.Node.addGetters(Kinetic.Line, ['points']);

    /**
     * get points array
     * @name getPoints
     * @methodOf Kinetic.Line.prototype
     */
})();
