class spinlog{

          constructor(angle){


            var options={

                isStatic:true,
            }

              this.body = Bodies.rectangle(200,200,80,10,options)
              this.width=80;
              this.height=80;
              Matter.Body.setAngle(this.body, angle);
              World.add(world,this.body)


          }

                display(){

                     var angle=this.body.angle
                    rotate(angle)
                    rectMode(CENTER)
                    rect(this.body.position.x,this.body.position.y,this.width,this.height)




                }


}