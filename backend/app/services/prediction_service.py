import shutil
import tempfile

from app.models.image_classifier import classify

async def predict_image(file):

    temp = tempfile.NamedTemporaryFile(delete=False)

    with open(temp.name, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = classify(temp.name)

    return {
        "success": True,
        "predictions": result[:5]
    }
