/* eslint-disable */
import Conta from '../controllers/models/Conta';
import *as Yup from 'yup';
import Instituicao from './models/Instituicao';

class ContaController{
  async store(req,res){
    const schema = Yup.object().shape({
      numero: Yup.string().required(),
      instituicao_id: Yup.number().integer().required(),


    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Falha ao cadastrar.'});
    }

    const contaExists = await Conta.findOne({
      where: { numero: req.body.numero}
    });

    if(contaExists){
      return res.status(400).json({error: 'Essa conta já existe.'});
    }

    const { numero, instituicao_id } = req.body;
    try {
      console.log('REQ.USERID =>', req.userId);
      console.log('req.body =>', req.body);


    const contas = await Conta.create({
      usuario_id: req.userId,
      numero,
      instituicao_id,
      saldo: 0,
    })

    return res.json({contas});
  }catch (err) {
    console.error('Erro ao criar conta:', err);
    return res.status(500).json({ error: 'Erro interno ao criar conta.' });
  }
}
 }

export default new ContaController();
