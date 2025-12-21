from flask import Blueprint, request, jsonify
from calculator.calculator import calculate_absence_rate

absence_bp = Blueprint("absence", __name__)

@absence_bp.route("/calculate", methods=["POST"])
def calculate():
    try:
        data = request.get_json()
        result = calculate_absence_rate(
            mode=data["mode"],
            total_days=int(data["total_days"]),
            absences=int(data["absences"]),
            total_students=int(data["total_students"])
            if data["mode"] == "class" else None
        )
        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 400

