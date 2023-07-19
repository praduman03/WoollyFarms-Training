from fastapi import APIRouter, Depends, status, HTTPException
from .. import schemas,database,models,oauth2
from sqlalchemy.orm import Session
from typing import List

router = APIRouter(
    prefix="/group",
    tags=['groups']
)

get_db = database.get_db

@router.get('/', response_model=List[schemas.ShowGroup])
def all(db: Session=Depends(get_db)):
    groups = db.query(models.Group).all()
    return groups

@router.post("/", status_code = status.HTTP_201_CREATED)
def create_group(request: schemas.Group, db: Session = Depends(get_db)):
    new_group = models.Group(title=request.title, body=request.body,type=request.type, user_id=request.user_id)
    db.add(new_group)
    db.commit()
    db.refresh(new_group)
    return new_group