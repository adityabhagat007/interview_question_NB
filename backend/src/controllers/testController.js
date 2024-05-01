

export const testController = async (req, res, next) => {
  try {
    // const user = await userModel.create({
    //     name:"test",
    //     email:"test@email.com"
    // })
    res.status(200).json({
        data:user,
        message:"Test Route .... server is working ",
        status:true
    });
  } catch (err) {
    next(err);
  }
};
