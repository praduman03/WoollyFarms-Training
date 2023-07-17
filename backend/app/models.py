from sqlalchemy import Column, Integer, String, ForeignKey
from .database import Base
from sqlalchemy.orm import relationship
class Group(Base):
    __tablename__ = 'post'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    body = Column(String)
    user_id = Column(Integer, ForeignKey('users.id'))
    creator = relationship('User', back_populates='groups')


# class Post(Base):
#     __tablename__ = 'posts'

#     id = Column(Integer, primary_key=True, index=True)
#     title = Column(String)
#     content = Column(String)
#     author_id = Column(Integer, ForeignKey("users.id"))
#     group_id = Column(Integer, ForeignKey("group.id"))

#     user = relationship("User", back_populates="posts")
#     group = relationship("Group", back_populates="posts")  



class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
    groups = relationship('Group', back_populates='creator')


