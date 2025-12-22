def calculate_absence_rate(
    mode: str,
    total_days: int,
    absences: int,
    total_students: int = None  
):
    # find possible student days
    if mode == "class":
        possible_days = total_students * total_days
    else:
        possible_days = total_days

    # in case user put wrong numbers
    if absences < 0:
        raise ValueError("Absences cannot be negative!")

    if absences > possible_days:
        raise ValueError("Absences cannot exceed possible student days!")

    actual_days = possible_days - absences
    absence_rate = absences / possible_days

    return {
        "actual_days": actual_days,
        "possible_student_days": possible_days,
        # "total_absence": absences, under maintainants
        "absence_rate_percent": round(absence_rate * 100, 2)
    }
