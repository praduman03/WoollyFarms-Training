from fastapi import APIRouter
from .. import schemas
import os
from email.message import EmailMessage
import ssl
import smtplib
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

USERNAME = os.environ.get("EMAIL_USERNAME")
PASSWORD = os.environ.get("EMAIL_PASSWORD")
email_receiver = os.environ.get("EMAIL_RECEIVER")


def send_mail(name:str, email:str, message:str):

    subject = "Message From a VIGILANTY User"
    body = f"""
    This is a automated message send by VIGILANTY Help Desk

    Name - {name}
    Email - {email}
    Message - {message}
    """

    em = EmailMessage()
    em['From'] = USERNAME
    em['To'] = email_receiver
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        print(f"PASSWORD: {PASSWORD}")
        smtp.login(USERNAME, PASSWORD)
        smtp.sendmail(USERNAME, email_receiver, em.as_string())
    
    return "success hola"


@router.post("/contact")
def schedule_mail(request:schemas.Message):

    send_mail(request.name, request.email, request.message)
    return {"status": 200, "message":"email has been scheduled"}
 
