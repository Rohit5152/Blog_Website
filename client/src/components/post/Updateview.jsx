import { useState, useEffect } from "react";
import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import { AddCircle } from '@material-ui/icons'
import { getPost, updatePost,uploadFile } from "../../services/api";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    container: {
        padding: '0 100px'
        ,
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        height: '50vh',
        width: '100%',
        objectFit: 'cover'
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10
    },
    textfield: {
        flex: 1,
        fontSize: 20,
        margin: '0 30px'
    },
    Textarea: {
        width: "100%",
        marginTop: 50,
        border: "none",
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }

}));

const intialvalues = {
    title: '',
    description: '',
    picture: '',
    user: 'Rohit Kadyan',
    categories: 'all',
    createdate: new Date()
}

const Updateview = ({ match }) => {
    const classes = useStyle();

    const history = useHistory();
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const [post, setPost] = useState(intialvalues);
    // const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'


    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();

    }, [file])

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, []);


    const handlechange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    const updateblog = async () => {
        await updatePost(match.params.id, post);
        history.push(`/details/${match.params.id}`);
    }
    return (
        <Box className={classes.container}>
            <img src={url} alt="Banner" className={classes.image} />

            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <AddCircle color="action" fontSize="large" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputBase className={classes.textfield} name="title" onChange={(e) => handlechange(e)} value={post.title} placeholder="Title:" />
                <Button variant="contained" onClick={() => updateblog()} color="primary">Update</Button>
            </FormControl>

            <TextareaAutosize
                minRows={5}
                placeholder="Tell your Story..."
                className={classes.Textarea}
                value={post.description}
                name="description"
                onChange={(e) => handlechange(e)}
            />
        </Box>
    )
}
export default Updateview;
