from fastapi import APIRouter, Depends, status, HTTPException
from .. import schemas,database,models,oauth2
from sqlalchemy.orm import Session

router = APIRouter(
    prefix="/group",
    tags=['groups']
)

get_db = database.get_db

@router.post("/", status_code = status.HTTP_201_CREATED)
async def create_group(request: schemas.Group, db: Session = Depends(get_db), current_user:schemas.User = Depends(oauth2.get_current_user)):
    new_group = models.Group(name=request.name, description=request.description)
    db.add(new_group)
    db.commit()
    db.refresh(new_group)
    return new_group
