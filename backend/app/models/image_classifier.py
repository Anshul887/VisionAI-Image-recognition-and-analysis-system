from transformers import pipeline

classifier = pipeline(
    "image-classification",
    model="google/vit-base-patch16-224"
)

def classify(image_path):
    return classifier(image_path)
